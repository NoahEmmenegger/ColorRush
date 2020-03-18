<?
    session_start();
    $highscore = $_POST["highscore"] ?? "";
    var_dump($highscore);
    include '..\Model\UserModel.php';
    $user = UserModel::findUserWithName($_SESSION['username']);
    $user->updateHighscore($highscore);
?>