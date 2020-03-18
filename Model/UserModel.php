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

        public function updatePassword($newPassword)
        {
            $db = self::connectToDataBase();
            $this->_password = $newPassword;
            $db->query("UPDATE user SET password=$newPassword 
             WHERE id=$this->_id LIMIT 1");
        }

        public function updateHighscore($newHighscore)
        {
            $db = self::connectToDataBase();
            $this->_password = $newHighscore;
            $db->query("UPDATE user SET highscore=$newHighscore 
             WHERE id=$this->_id LIMIT 1");
        }

        public static function create($username, $password)
        {
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