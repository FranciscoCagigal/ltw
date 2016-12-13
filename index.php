<?php
session_start(); 

$templates = array("aboutUs", "home", "login", "registration", "rest", "userProfile", "restaurantCreation", "rests");

if(isset($_GET['page']) && in_array($_GET['page'],$templates))
{
$page='templates/'.$_GET['page'].'.php';
}
else {
	header("LOCATION: ?page=home");
	$page='templates/home.php';
}

include_once('templates/header.php');
include_once($page);
include_once('templates/footer.php');
?>