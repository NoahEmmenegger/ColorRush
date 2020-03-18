<html>
  <?
  session_start();

  $url = $_GET['url'] ?? "";
  $url = rtrim($url, '/');
  $url = explode('/', $url);
  if($url[0] == '')
  {
    $url[0] = 'Login';
  }
  //Das File, welches der Url entspricht
  $file = 'Controller/' . $url[0] . '.php';
    if(file_exists($file))
  {
    include $file;  
  }
  else{
    echo "Diese Url exisitert nicht. Fehler: 404";
  }
  
  ?>
    <body>

    </body>
</html>