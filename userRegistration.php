<?php
	
	function createUser($dbh,$name,$username,$age,$email,$password) {

	$stmt = $dbh->prepare('INSERT INTO User(name,username, age, email, password,imgSrc) VALUES(?,?,?,?,?,images/usersProfile/none.png);');
	$encodedPass = hash('sha256',$password );
    if($stmt->execute(array($name,$username,$age,$email,$encodedPass)))
		return 0;
	else return 1;
	}
	
	function updateUser($dbh,$name,$user,$age,$email,$imgSrc) {
	$stmt = $dbh->prepare('UPDATE User SET name=?, age=?,email=?,imgSrc=? WHERE username=?;');
    if($stmt->execute(array($name,$age,$email,$imgSrc,$user)))
		return 0;
	else return 1;
	}
	
	function updatePass($dbh,$user,$pass) {
	$stmt = $dbh->prepare('UPDATE User SET password=?WHERE username=?;');
	$encodedPass = hash('sha256',$pass );
    if($stmt->execute(array($encodedPass,$user)))
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