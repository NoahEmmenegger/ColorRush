<html>
    <head>
        <link rel="stylesheet" href="./css/LoginRegister.css">
        <script src="./JavaScripts/Login.js"></script>
    </head>
    <body>
            <form method="POST">
                Benutzername:
                <br>
                <input type="text" name="username">
                <br>
                Passwort:
                <br>
                <input type="text" name="password">
                <br>
                <br>
                <input type="image" width="60px" src="/ColorRush/assets/LoginButton.png">
        </form>
        <br>
        <?
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
        <a href="/ColorRush/Register">Noch kein Account? Jetzt Registrieren</a>
    </body>
</html>