<?
    $problems = "";
    $username = $_POST["username"] ?? "";;
    $password = $_POST["password"] ?? "";;
    $confirm_password = $_POST["confirm_password"] ?? "";

    if($username == "" && $password == "")
    {
        include 'View\RegisterView.php';
    }
    else{
        if(strlen($username) < 2)
    {
        $problems = $problems . "||Der Benutzername ist zu kurz, er muss mindestens zwei Zeichen haben.";
    }

    if(strlen($password) < 3){
        $problems = $problems . "||Das Passwort ist zu kurz es muss mindestens 3 Zeichen haben.";
    }

    if($password != $confirm_password){
        $problems = $problems . "||Das Passwort stimmt nicht mit dem wiederholten Passwort überein.";
    }
    

    if($problems == "")
    {
        include 'Model\UserModel.php';
        $user = UserModel::findUserWithName($username);
        if($user == null)
        {           
            $user = UserModel::create($username, $password);
            $_SESSION['username'] = $user->_username;
            header('Location: http://localhost/ColorRush/Game');
        }
        else
        {
            $problems = $problems . "||Benutzer exisitert bereits. Geben Sie einen anderen Benutzernamen ein.";        
        }
    }
    
    if($problems != "")
    {
        include 'View\RegisterView.php'; 
    }
    }

    
    
?>