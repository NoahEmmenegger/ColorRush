class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' })
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
                this.scene.start('GameScene')
            },
            this
        )

        this.image = this.add.image(540, 115, 'settings')
        this.image.setScale(0.05)
        this.image.setInteractive()
        this.image.on(
            'pointerdown',
            function() {
                this.scene.start('SettingsScene')
            },
            this
        )

        this.input.keyboard.on(
            'keyup',
            function(e) {
                if (e.key == 'Enter') {
                    this.scene.start('GameScene')
                }
            },
            this
        )
    }
}
