class SettingsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'SettingsScene' })
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
                this.scene.start('StartScene')
            },
            this
        )

        this.text = this.add.text(120, 100, 'Settings', {
            font: '40px Sans-serif'
        })

        this.text.setColor('#16bbf2')

        this.input.keyboard.on(
            'keyup',
            function(e) {
                if (e.key == 'Enter') {
                    this.scene.start('StartScene')
                }
            },
            this
        )
    }
}
