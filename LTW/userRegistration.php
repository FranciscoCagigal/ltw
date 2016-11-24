<?php
	session_start();
	
	if(!isset( $_POST['name'])||!isset( $_POST['username'])||!isset( $_POST['age'])||!isset( $_POST['email'])||!isset( $_POST['password']))
		echo "error";
	$name = $_POST['name'];
	$username = $_POST['username'];
	$age = $_POST['age'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	
	include_once('connection.php');
	$stmt = $dbh->prepare('INSERT INTO User(name,username, age, email, password) VALUES(?,?,?,?,?);');
    $stmt->execute(array($name,$username,$age,$email,$password));
	echo $age;

	/*
	$data = $_POST['data'];*/
  /*$stmt = $dbh->prepare('INSERT INTO User(?,?,?,?,?);');
    $stmt->execute(array($data.name,$data.username,$data.age,$data.email,$data.password));*/
?>