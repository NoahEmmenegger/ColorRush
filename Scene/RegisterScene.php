<html>
    <head>
        <link rel="stylesheet" type="text/css" href="./css/LoginRegister.css">
    </head>
    <body>
        <div class="loginForm">
            <form action="\ColorRush\LoginRegister\RegisterController.php" method="POST">
                Benutzername:
                <br>
                <input type="text" name="username">
                <br>
                Passwort:
                <br>
                <input type="text" name="password">
                <br>
                Passwort Wiederholen:
                <br>
                <input type="text" name="confirm_password">
                <br>
                <br>
                <input type="image" width="60px" src="/ColorRush/assets/RegisterButton.png">
        </form>
        </div>
        <br>
        <?
            $problems = $_GET['Probleme'] ?? "";
            if($problems != "")
            {
                foreach(explode('||', $problems) as $oneProblem)
                {
                    echo "<p>" . $oneProblem . "<p>";
                }
            }
        ?>
        <br>
        <br>
        <a href="/ColorRush/Scene/LoginScene.php">Bereits ein Account? Jetzt einloggen</a>
    </body>
</html>