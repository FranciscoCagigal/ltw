<?php
	
	function createUser($dbh,$name,$username,$age,$email,$password) {

	$stmt = $dbh->prepare('INSERT INTO User(name,username, age, email, password) VALUES(?,?,?,?,?);');
	$encodedPass = hash('sha256',$password );
    if($stmt->execute(array($name,$username,$age,$email,$encodedPass)))
		return 0;
	else return 1;
	}
	
	function existUser($dbh,$username,$email) {
		
	//TODO: por email como unique na base dados e confirmar se é uncico tbm
	
	$stmt = $dbh->prepare('SELECT * FROM User WHERE username = ?;');
    $stmt->execute(array($username));
	if($stmt->fetch())
		return 1;
	else return 0;
	}
?>