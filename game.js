var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 700,
    backgroundColor: '#ffffff',
    scale: {
        autoCenter: true
    },
    physics: {
        default:'arcade'
    },
    scene: [StartScene, GameScene, SettingsScene]
}

var game = new Phaser.Game(config)

var green = '#79e364'