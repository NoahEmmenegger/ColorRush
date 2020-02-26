class GameScene extends Phaser.Scene{
    constructor() {
        super({key:"GameScene"});
    }

    preload() {
        this.load.audio('music', ['assets/Music.mp3']);
        this.load.image('ball', './assets/ball.png')
    }

    create() {

        //this.soundFx = this.sound.add("music", {loop: "true"});
        //this.soundFx.play();

        console.log(this.cameras.main.centerY)

        this.image = this.add.image(300, 600, 'ball')
        this.image.setScale(0.1);
    }
}