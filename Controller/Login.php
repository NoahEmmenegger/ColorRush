<?
    $problems = "";
    $username = $_POST["username"] ?? "";;
    $password = $_POST["password"] ?? "";;
    if($password == "" && $username == "")
    {
        include 'View\LoginView.php';
    }
    else{
        include 'Model\UserModel.php';
        $user = UserModel::findUserWithName($username);
        if($user != null)
        {
            if($user->_password == $password)
            {
                $_SESSION['username'] = $user->_username;
                header('Location: http://localhost/ColorRush/Game');
                session_write_close();
            }
            else
            {
                $problems = $problems . "Das Passwort vom Benutzer stimmt nicht.";
            }
        }
        else
        {
            $problems = $problems . "Der Benutzer exisitert nicht.";
        }

        if($problems != "")
        {    
            include 'View\LoginView.php';
        }
    }    
?>
