class GameOverScene extends Phaser.Scene {
    constructor(data) {
        super({ key: 'GameOverScene' })
    }

    init(data){
        this.score = data.score;
        this.isMute = data.isMute;
      }

    preload() {
        this.load.image('home', './assets/homeIcon.png')
        this.load.image('buttonReplay', './assets/button_replay.png')
    }

    create() {
        this.image = this.add.image(300, 350, 'buttonReplay')
        this.image.setScale(0.5)
        this.image.setInteractive()
        this.image.on(
            'pointerdown',
            function() {
                this.scene.start('GameScene', { isMute: this.isMute })
            },
            this
        )
        this.image = this.add.image(540, 115, 'home')
        this.image.setScale(0.12)
        this.image.setInteractive()
        this.image.on(
            'pointerdown',
            function() {
                this.scene.start('StartScene', { isMute: this.isMute })
            },
            this
        )

        this.text = this.add.text(120, 100, 'Game Over \n\n Your Score: ' + this.score, {
            font: '40px Sans-serif'
        })

        this.text.setColor('#16bbf2')

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
