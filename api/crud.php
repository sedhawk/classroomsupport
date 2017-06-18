<?php
require 'APIEndpoint.php';
require 'config.php';

$tables = ['person', 'campus', 'images', 'room_type', 'building', 'department', 'room'];
$endpoints = [];
foreach($tables as $table)
{
	$endpoints[$table] = new APIEndpoint(Data::$host, Data::$port, Data::$db, Data::$user, Data::$pass, $table);
}

//---------------

if(isset($_REQUEST['dataset']))
{
	http_response_code(200);
	header('Content-Type: application/json');
	$endpoints[$_REQUEST['dataset']]->handleRequest();
}
else
{
	http_response_code(404);
	header('Content-Type: text/html');
    print("<p>This is not the page you are looking for</p>");
}
?>
