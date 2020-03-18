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

    preload() {
        this.load.image('button', './assets/button_start.png')
        this.load.image('settings', './assets/settings.png')
    }

    create() {
        this.image = this.add.image(300, 350, 'button')
        this.image.setScale(0.5)
        this.image.setInteractive()
        this.image.on(
            'pointerdown',
            function() {
                this.scene.start('GameScene', { isMute: this.isMute })
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
