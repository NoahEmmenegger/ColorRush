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
        this.leftkeyDown = false;
        this.rightKeyDown = false;
        console.log(this.cameras.main.centerY)
        this.player = this.physics.add.sprite(300, 600, 'ball');
        this.player.setScale(0.1);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update(){
    if (this.cursors.left.isDown)
    {        
        this.leftkeyDown = true;
    }
    else if(this.leftkeyDown)
    {
        this.leftkeyDown = false;
        if(this.player.x > 200){
            this.player.x = this.player.x -200  
        }      
    }
    else if (this.cursors.right.isDown)
    {
        this.rightKeyDown = true;
    }
    else if(this.rightKeyDown)
    {
        this.rightKeyDown = false;
        if(this.player.x < 500){
            this.player.x = this.player.x + 200     
        }   
    }
    }
}