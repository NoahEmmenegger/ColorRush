class GameScene extends Phaser.Scene{
    
    constructor() {
        super({key:"GameScene"});
    }

    preload() {
        this.load.audio('music', ['assets/Music.mp3']);
        this.load.image('ball', './assets/ball.png');
        this.load.image('bar_blue', './assets/bar_blue.png');
        this.load.image('bar_green', './assets/bar_green.png');
        this.load.image('bar_red', './assets/bar_red.png');
        
        this.distance = 1000; //in ms
        this.speed = 5;
    }

    create() {

        //this.soundFx = this.sound.add("music", {loop: "true"});
        //this.soundFx.play();
        this.leftkeyDown = false;
        this.rightKeyDown = false;
        this.player = this.physics.add.sprite(300, 600, 'ball');
        this.player.setScale(0.1);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.containers = []
        this.timedEvent = this.time.addEvent({ delay: this.distance, callback: this.onEvent, callbackScope: this});
    }

    onEvent ()
    {
        this.createBar();
        //Phaser.Math.Between(1000, 3000)
        this.timedEvent.reset({ delay: this.distance, callback: this.onEvent, callbackScope: this, repeat: 1});
    }

    update(){
        this.containers.map((container) => {
            container.y += this.speed;
            if (container.y > 800) {
                container.destroy();
                this.containers.splice(this.containers.indexOf(container), 1)
            }
        })


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

    createBar() {
        var randomarray = this.getRandomPosition();
        var container = this.add.container(0, 0);
        var bar_blue = this.physics.add.sprite(randomarray[0], 0, 'bar_blue');
        var bar_green = this.physics.add.sprite(randomarray[1], 0, 'bar_green');
        var bar_red = this.physics.add.sprite(randomarray[2], 0, 'bar_red');
        this.containers.push(container.add([bar_blue, bar_green, bar_red]));
    }

    getRandomPosition() {
        var positions = [100, 300, 500]
        var arr = [];
        while(arr.length < 3){
            var r = Phaser.Math.Between(0, 2);
            if(arr.indexOf(positions[r]) === -1) arr.push(positions[r]);
        }
        return arr;
    }
}