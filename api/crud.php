<?php
require_once('config.php');
require_once('APIEndpoint.php');
require_once('HTTPUtils.php');

$tables = ['person', 'campus', 'images', 'room_type', 'building', 'room', 'department', 'department_person', 'device_type', 'vendor', 'collaborator', 'remediation', 'notes', 'program', 'device', 'vendor_person', 'checklist', 'collab_remed', 'history_table', 'checklist_item', 'deploy_device', 'install_program'];

$endpoints = [];
foreach($tables as $table)
{
	$endpoints[$table] = new APIEndpoint(Data::$host, Data::$port, Data::$db, Data::$user, Data::$pass, $table);
}

//---------------

if(isset($_REQUEST['dataset']))
{
	$endpoints[$_REQUEST['dataset']]->handleRequest();
}
else
{
	http_response_code(404);
	header('Content-Type: text/html');

    print("<p>This is not the page you are looking for</p>");
}
