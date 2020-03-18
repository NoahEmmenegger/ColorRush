<?
    class UserModel 
    {
        public $_id;
        public $_username;
        public $_password;
        public $_highscore;
        public $_audio;


        public function __construct($id, $username, $password, $highscore, $audio)
        {
            $this->_id = $id;
            $this->_username = $username; 
            $this->_password = $password;
            $this->_highscore = $highscore;
            $this->_audio = $audio;
        }


        public static function findUserWithName($username)
        {
            $db = self::connectToDataBase();
            $sql = "SELECT * FROM user Where username = '$username'";
            foreach($db->query($sql) as $row)
            {
                $username =  $row['Username'];
                $password =  $row['Password'];
                $id =  $row['Id'];
                $highscore = $row['Highscore'];
                $audio = $row['Audio'];
                
                $user = new UserModel($id, $username, $password, $highscore, $audio);
                return $user;
            }
            return null;
        }

        public static function create($username, $password)
        {
            var_dump($username);
            var_dump($password);
            $db = self::connectToDataBase();
            $statement = $db->prepare("INSERT INTO user (username, password, highscore, audio) VALUES (?, ?, ?, ?)");
            $statement->execute(array($username, $password, 0, true));
            $user = self::findUserWithName($username);
            return $user;
        }

        public static function connectToDataBase(){
            $db= new PDO('mysql:host=localhost;dbname=colorrush', 'root');
            return $db;
         }
    }
?>