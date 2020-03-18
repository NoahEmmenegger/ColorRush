<?
    session_start();

    $newPassword = $_POST["newPassword"] ?? "";

    if($newPassword != "")
    {
        include '..\Model\UserModel.php';
        $user = UserModel::findUserWithName($_SESSION['username']);
        $user->updatePassword($newPassword);
        header('Location: http://localhost/ColorRush/Game');
    }
    else{
        include '..\View\ChangePasswordView.php';
    }

?>