<?php
class Database
{
    
	/* Changes to implement Heroku Deploy
    private $host = "";
	private $db_name = "api_db";
    private $username = "root";
    private $password = "";
    */
    public $conn;
 
    // get the database connection
    public function getConnection()
    { 
        $url = parse_url(getenv("CLEARDB_DATABASE_URL"));
        $host = $url["host"];
        $db_name = "heroku_7a0450a60ed2019";
        $username = $url["user"];//'b9c719809cfc04';
        $password = $url["pass"];//'a74d38f82287056';

        $this->conn = null;
 
        try
        {
            $this->conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
            $this->conn->exec("set names utf8");
        }
        catch(PDOException $exception)
        {
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>