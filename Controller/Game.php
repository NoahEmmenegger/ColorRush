<html>
    <?
        if(!isSet($_SESSION['username']))
        {
            header('Location: http://localhost/ColorRush/Login');
        }
    ?>
    <script src="phaser.js"></script>
    <script src="Scene/StartScene.js"></script>
    <script src="Scene/GameScene.js"></script>
    <script src="Scene/SettingsScene.js"></script>
    <script src="Scene/GameOverScene.js"></script>
    <script src="game.js"></script>
    <style>
        html,
        body {
            height: 100%;
            margin: 0;
            background-color: black;
        }
    </style>
</html>
