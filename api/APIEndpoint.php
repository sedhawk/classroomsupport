<?php

class APIEndpoint
{
	protected $host = '';
	protected $db = '';
	protected $user = '';
	protected $pass = '';
	protected $table = '';
	protected $pdo = NULL;

	function __construct($host, $port, $db, $user, $pass, $table)
	{
		$this->host = $host;
		$this->port = $port;
		$this->db   = $db;
		$this->user = $user;
		$this->pass = $pass;
		$this->table = $table;

		$this->connect();
	}

	function connect()
	{
		try
		{
			$this->pdo = new PDO("mysql:host=$this->host:$this->port;dbname=$this->db", $this->user, $this->pass);
		} 
		catch (PDOException $e) 
		{
			die("Error!: " . $e->getMessage() . " <br/>");
		}
	}

	function isValidJSON($data) 
	{
		if(strlen($data) <= 0)
		{
			return false;
		}
		else
		{
			json_decode($data);
			return json_last_error() == JSON_ERROR_NONE;
		}
	}

	function createRecords($data)
	{
		if($this->isValidJSON($data))
		{
			$query = "INSERT INTO $this->table (";

			$columns = json_decode($data, true);
			foreach($columns as $columnName => $column)
			{
				$query .= "$columnName,";	
			}
			$query = rtrim($query, ',');

			$query .= ") VALUES (";
			foreach($columns as $column)
			{
				$query .= "'$column',";
			}
			$query = rtrim($query, ',');
			$query .= ")";

			$statement = $this->pdo->prepare($query);
			$result = $statement->execute();

			if($result)
			{
				$columns["$this->table" . "ID"] = $this->pdo->lastInsertId();
				print json_encode($columns);
			}
			else
			{
				header("HTTP/1.1 500 Internal Server Error");
				print "There was an error processing this request";
			}
		}
		else
		{
			print("invalid json");
		}
	}
	
	function getRecords($data)
	{
		$id = $data['id'];

		$query = "SELECT * FROM $this->table";
		if($id) 
		{
			$query .= " WHERE $this->table" . "ID = '$id'";
		}

		$statement = $this->pdo->query($query);
		$resultJSON = json_encode($statement->fetchAll(PDO::FETCH_ASSOC));
		print $resultJSON;		
	}

	function updateRecords($data)
	{
		$query = "UPDATE * FROM $this->table" . "ID = '$id'";

		if($id)
		{
			$query .= " WHERE $this->table" . "ID = '$id'";
		}

		$statement = $this->pdo->query($query);
		$resultJSON = json_encode($statement->fetchAll(PDO::FETCH_ASSOC));
		print $resultJSON;		

	}

	function deleteRecord($data)
	{
		$id = $data['id'];

		$query = "DELETE FROM $this->table";

		if($id)
		{
			$query .=" WHERE $this->table" . "ID = '$id'";
		}

		$statement = $this->pdo->query($query);
		$resultJSON = json_encode($statement->fetchAll(PDO::FETCH_ASSOC));
		print $resultJSON;		
	}

	function handleRequest()
	{
		// Create
		if($_SERVER['REQUEST_METHOD'] === 'POST')
		{
			$this->createRecords(file_get_contents('php://input'));
		}

		// Read
		if ($_SERVER['REQUEST_METHOD'] === 'GET') 
		{	
			$this->getRecords($_REQUEST); 
		}

		// Update
		else if ($_SERVER['REQUEST_METHOD'] === 'REQUEST') 
		{
			$this->updateRecords($_REQUEST);
		}

		// Delete
		else if($_SERVER['REQUEST_METHOD'] === 'DELETE')
		{
			$this->deleteRecord($_REQUEST);	
		}
	}
}
?>
