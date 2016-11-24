<?php
session_start(); 

if(isset($_GET['page']))
{
$page=$_GET['page'].'.php';
}
else $page='registration.php';

include_once('header.php');
include_once($page);
include_once('footer.php');
?>