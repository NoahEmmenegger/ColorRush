var config = {
    type: Phaser.AUTO,
    width:600,
    height:700,
    backgroundColor: "#ffffff",
    scale: {
        autoCenter: true
    },
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scene: [ StartScene, GameScene]
};

var game = new Phaser.Game(config);