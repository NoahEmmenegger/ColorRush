class StartScene extends Phaser.Scene{
    constructor() {
        super({key:"StartScene"});
    }

    preload() {
        
    }

    create() {
        this.text = this.add.text(0,0,"Press Enter to Start", {font:"40px Impact"});

        this.text.setColor("#ff00e6")

        this.input.keyboard.on('keyup', function(e) {
            if (e.key == "Enter") {
                this.scene.start("GameScene")
            }
        }, this);
    }
}