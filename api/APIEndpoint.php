<?php
require_once('HTTPUtils.php');

/**
 * Class APIEndpoint
 *
 * This class creates an object that serves as a single endpoint for a RESTFUL API, for performing basic CRUD (Create,
 * READ, UPDATE, and DELETE) operations on a single database table. Given the name of a database table, the created
 * endpoint object will perform these operation using JSON to receive request data and to send response data. The
 * object will also assume that the table column names exactly match the JSON property names.
 */
class APIEndpoint
{
	protected $host = '';
	protected $db = '';
	protected $user = '';
	protected $pass = '';
	protected $table = '';
	protected $pdo = NULL;

	/**
	 * APIEndpoint constructor.
	 * @param $host - The host name or IP for the database server
	 * @param $port - The port on which the database server is connected
	 * @param $db - The name of the database to which to connect
	 * @param $user - The username of the database account to use
	 * @param $pass - The password for the database user account
	 * @param $table - The name of the table on which this API endpoint should perform CRUD operations
	 */
	public function __construct($host, $port, $db, $user, $pass, $table)
	{
		// Save the endpoint database information
		$this->host = $host;
		$this->port = $port;
		$this->db   = $db;
		$this->user = $user;
		$this->pass = $pass;
		$this->table = $table;

		// Connect the endpoint to the database
		$this->connect();
	}

	/**
	 * Create a PDO connection to the database specified in the constructor
	 */
	protected function connect()
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

	/**
	 * Returns true if the passed in data is a valid JSON string, false otherwise
	 * @param $data - The data to validate as a JSON string
	 * @return bool - True/False indicating if the $data is valid or not
	 */
	protected function isValidJSON($data)
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

	/**
	 * Insert the given JSON records into the db table associated with this endpoint
	 * @param $data
	 */
	protected function createRecords($data)
	{
		// Only work with valid JSON data
		if($this->isValidJSON($data))
		{
			// Build a list of column names from the given JSON data
			$columnString = '';
			$columns = json_decode($data, true);
			foreach($columns as $columnName => $column)
			{
				$columnString .= "$columnName,";
			}
			$query = rtrim($columnString, ',');

			// Build a list of column values from the given JSON data
			$valueString = '';
			foreach($columns as $column)
			{
				$valueString .= "'$column',";
			}
			$valueString = rtrim($query, ',');

			// Run a query to insert the columns into the database
			$query = "INSERT INTO ? ( ? ) VALUES ( ? )";
			$statement = $this->pdo->prepare($query);
			$result = $statement->execute([$columnString, $valueString]);

			// If the query was successful then return the created row in JSON encoding
			if($result)
			{
				$columns["$this->table" . "ID"] = $this->pdo->lastInsertId();
				print json_encode($columns);
			}

			// Otherwise return an error response
			else
			{
				HTTPUtils::sendResponse(500, "{ \"error\": \"There was an error fulfilling this request\" }");
			}
		}
		else
		{
			HTTPUtils::sendResponse(400, "{ \"error\": \"The request did not contain valid JSON\" }");
		}
	}

	/**
	 * Return all of the rows in the table associated with this endpoint, or a single one specified by primary key
	 * @param $data - The request data for this request
	 */
	protected function getRecords($data)
	{
		if (isset($data['id']))
		{
			$id = $data['id'];
		}
		else
		{
			$id = null;
		}

		$query = "SELECT * FROM $this->table";
		if($id) 
		{
			$query .= " WHERE $this->table" . "ID = '$id'";
		}

		$statement = $this->pdo->query($query);
		$resultJSON = json_encode($statement->fetchAll(PDO::FETCH_ASSOC));
		print $resultJSON;		
	}

	/**
	 * Update a single row in the table associated with this endpoint
	 * @param $data - The data with which to update the record
	 */
	protected function updateRecords($data)
	{
	}

	/**
	 * Handle the current server request
	 */
	public function handleRequest()
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

		else
		{
			$statusCode = $_SERVER['REQUEST_METHOD'];
			HTTPUtils::sendResponse(504, "The received status code ($statusCode) is unsupported or not a valid HTTP status code");
		}
	}
}

