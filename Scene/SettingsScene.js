class SettingsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'SettingsScene' })
    }

    init(data){
        this.isMute = data.isMute;
      }

    preload() {
        this.load.image('goBack', './assets/goBack.png')
    }

    create() {
        this.image = this.add.image(540, 115, 'goBack')
        this.image.setScale(0.12)
        this.image.setInteractive()
        this.image.on(
            'pointerdown',
            function() {
                this.scene.start('StartScene', { isMute: this.isMute })
            },
            this
        )

        this.musicText = this.add.text(120, 300, 'Music: ' + !this.isMute, {
            font: '20px Sans-serif',
            color: '#000000'
        })

        this.musicText.setInteractive();

        this.musicText.on(
            'pointerdown',
            function() {
                this.isMute = !this.isMute;
                this.musicText.setText('Music: ' + !this.isMute)
            },
            this
        )

        this.text = this.add.text(120, 100, 'Settings', {
            font: '40px Sans-serif',
            color: '#16bbf2'
        })

        this.input.keyboard.on(
            'keyup',
            function(e) {
                if (e.key == 'Enter') {
                    this.scene.start('StartScene', { isMute: this.isMute })
                }
            },
            this
        )
    }
}
