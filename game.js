var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 700,
    backgroundColor: '#ffffff',
    scale: {
        autoCenter: true
    },
    physics: {
        default: 'arcade'
    },
    scene: [StartScene, GameScene, SettingsScene, GameOverScene]
}

var game = new Phaser.Game(config)

var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
        
            if (this.status == 200) {
                var data = JSON.parse(this.responseText);
                game.user = data
            }
        };
        xhr.open("POST", 'Controller/User.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();


var green = '#79e364'
