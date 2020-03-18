<?
   //header("Content-Type:application/json");
   session_start();
   include '..\Model\UserModel.php';

   $user = UserModel::findUserWithName($_SESSION['username']);
   echo json_encode($user);
?>