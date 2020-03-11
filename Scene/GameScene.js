class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' })
    }

    preload() {
        this.load.audio('music', ['assets/Music.mp3']);
        this.load.image('ball_blue', './assets/ball_blue.png');
        this.load.image('ball_green', './assets/ball_green.png');
        this.load.image('ball_red', './assets/ball_red.png');
        this.load.image('bar_blue', './assets/bar_blue.png');
        this.load.image('bar_green', './assets/bar_green.png');
        this.load.image('bar_red', './assets/bar_red.png');

        this.distance = 1000; //in ms
        this.speed = 5;
        this.activeBall = this.getRandomBallColor();
    }

    create() {
        //this.soundFx = this.sound.add("music", {loop: "true"});
        //this.soundFx.play();
        this.leftkeyDown = false;
        this.rightKeyDown = false;
        this.player = this.physics.add.sprite(300, 600, this.activeBall);
        this.player.setScale(0.05);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.score = 0;
        this.text = this.add.text(590, 40, 'score', { font: '32px Courier', fill: '#000000', align: 'right', boundsAlignH: 'right' });
        this.text.setDepth(1)
        this.text.setOrigin(1);
        this.time.addEvent({ delay: 50, callback: this.updateScore, callbackScope: this, loop: true });

        this.containers = []
        this.timedEvent = this.time.addEvent({
            delay: this.distance,
            callback: this.onEvent,
            callbackScope: this
        })
    }

    updateScore() {
        this.score += 1;
    }

    onEvent ()
    {
        this.createBar();
        //Phaser.Math.Between(1000, 3000)
        this.timedEvent.reset({
            delay: this.distance,
            callback: this.onEvent,
            callbackScope: this,
            repeat: 1
        })
    }

    update() {
        this.containers.map(container => {
            container.y += this.speed
            if (container.y > 800) {
                container.destroy()
                this.containers.splice(this.containers.indexOf(container), 1)
            }
        })

        if (this.cursors.left.isDown) {
            this.leftkeyDown = true
        } else if (this.leftkeyDown) {
            this.leftkeyDown = false
            if (this.player.x > 200) {
                this.player.x = this.player.x - 200
            }
        } else if (this.cursors.right.isDown) {
            this.rightKeyDown = true
        } else if (this.rightKeyDown) {
            this.rightKeyDown = false
            if (this.player.x < 500) {
                this.player.x = this.player.x + 200
            }
        }

        this.text.setText(this.score);

        this.input.keyboard.on(
            'keyup',
            function(e) {
                if (e.key == 'Escape') {
                    this.scene.start('StartScene')
                }
            },
            this
        )
    }

    createBar() {
        var randomarray = this.getRandomPosition();
        var container = this.add.container(0, 0);
        var bar_blue = this.physics.add.sprite(randomarray[0], 0, 'bar_blue');
        var bar_green = this.physics.add.sprite(randomarray[1], 0, 'bar_green');
        var bar_red = this.physics.add.sprite(randomarray[2], 0, 'bar_red');
        var physic = this.physics.add.overlap([bar_red, bar_green, bar_blue], this.player, (bar, ball) => this.checkCollisionColor(bar, ball, physic), null, this);
        this.containers.push(container.add([bar_blue, bar_green, bar_red]));
        var containerPhysic = this.physics.add.overlap([bar_red, bar_green, bar_blue], this.player, (bar, ball) => this.changeColor(bar, ball, container), null, this);
    }

    changeColor(bar, ball, container) {
        if(container.y == 600) {
            this.activeBall = this.getRandomBallColor();
            this.player.setTexture(this.activeBall);
        }
    }

    getRandomBallColor() {
        var colors = ['ball_red', 'ball_green', 'ball_blue']
        return colors[Phaser.Math.Between(0,2)]
    }

    checkCollisionColor(bar, ball, physic) {
        if (bar.texture.key.split('_')[1] !== this.activeBall.split('_')[1]) {
            this.scene.start('GameOverScene')
        }
        physic.destroy()
    }

    getRandomPosition() {
        var positions = [100, 300, 500]
        var arr = []
        while (arr.length < 3) {
            var r = Phaser.Math.Between(0, 2)
            if (arr.indexOf(positions[r]) === -1) arr.push(positions[r])
        }
        return arr
    }
}
