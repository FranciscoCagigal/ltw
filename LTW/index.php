<?php
session_start(); 

if(isset($_GET['page']))
{
$page='templates/'.$_GET['page'].'.php';
}
else $page='templates/site.php';

include_once('templates/header.php');
echo $_SESSION['username'];
	include_once($page);
include_once('templates/footer.php');
?>