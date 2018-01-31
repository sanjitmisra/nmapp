<?php
class Database
{
    $url = parse_url(getenv("CLEARDB_DATABASE_URL"));

    private $host = $url["host"];
    private $db_name = "heroku_7a0450a60ed2019";
    private $username = 'b9c719809cfc04';
    private $password = 'a74d38f82287056';

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
        $this->conn = null;
 
        try
        {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
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