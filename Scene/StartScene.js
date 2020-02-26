class StartScene extends Phaser.Scene{
    constructor() {
        super({key:"StartScene"});
    }

    preload() {
        this.load.image('button', './assets/button_start.png')
    }

    create() {
        this.image = this.add.image(300, 600, 'button')
        this.image.setScale(0.5);
        this.image.setInteractive();
        this.image.on('pointerdown', function() {
            this.scene.start("GameScene")
        }, this)

        this.text = this.add.text(120,100,"Press Enter to Start", {font:"40px Sans-serif"});

        this.text.setColor("#16bbf2")

        this.input.keyboard.on('keyup', function(e) {
            if (e.key == "Enter") {
                this.scene.start("GameScene")
            }
        }, this);
    }
}