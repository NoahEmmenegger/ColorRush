class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' })
    }

    init(data){
        this.isMute = data.isMute;
        if (typeof(this.isMute) === "undefined"){
            this.isMute = true;
        }
    }

    getData() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
        
            if (this.status == 200) {
                var data = JSON.parse(this.responseText);
                this.user = data
            }
            this.scene.start('GameScene')
        };
        xhr.open("POST", 'Controller/User.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
    }

    preload() {
        this.load.image('button', './assets/button_start.png')
        this.load.image('settings', './assets/settings.png')
    }

    create() {
        console.log(this.sys.game.user)
        this.image = this.add.image(300, 350, 'button')
        this.image.setScale(0.5)
        this.image.setInteractive()
        this.image.on(
            'pointerdown',
            function() {
                this.scene.start('GameScene', { isMute: this.isMute, user: this.user })
            },
            this
        )

        this.image = this.add.image(540, 115, 'settings')
        this.image.setScale(0.05)
        this.image.setInteractive()
        this.image.on(
            'pointerdown',
            function() {
                this.scene.start('SettingsScene', {isMute: this.isMute})
            },
            this
        )

        this.userNameText = this.add.text(120, 250, this.sys.game.user['_username'], {
            font: '40px Sans-serif',
            color: '#16bbf2'
        })

        this.input.keyboard.on(
            'keyup',
            function(e) {
                if (e.key == 'Enter') {
                    this.scene.start('GameScene', { isMute: this.isMute })
                }
            },
            this
        )
    }
}
