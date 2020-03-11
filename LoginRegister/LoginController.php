<?
    $problems = "";
    $username = $_POST["username"] ?? "";;
    $password = $_POST["password"] ?? "";;
    include ('UserModel.php');
    $user = UserModel::findUserWithName($username);
    if($user != null)
    {
        if($user->_password == $password)
        {
            $_SESSION['username'] = $user->_username;
            header('Location: http://localhost/ColorRush/Game.html');
        }
        else{
            $problems = $problems . "Das Passwort vom Benutzer stimmt nicht.";
        }
    }
    else
    {
        $problems = $problems . "Der Benutzer exisitert nicht.";
    }

    if($problems != "")
    {       
        header('Location: http://localhost/ColorRush/Scene/LoginScene.php?Probleme='. $problems);
    }
    
?>
