<?php
	
	function createUser($dbh,$name,$username,$age,$email,$password) {
	$stmt = $dbh->prepare('INSERT INTO User(name,username, age, email, password,imgSrc) VALUES(?,?,?,?,?,"images/usersProfile/none.png");');
	$options = ['cost' => 12];
    $encodedPass = password_hash($password, PASSWORD_DEFAULT, $options);

    if($stmt->execute(array(trim(strip_tags($name)),trim(strip_tags($username)),trim(strip_tags($age)),trim(strip_tags($email)),$encodedPass)))
		return 0;
	else return 1;
	}
	
	function updateUser($dbh,$name,$user,$age,$email,$imgSrc) {
	$stmt = $dbh->prepare('UPDATE User SET name=?, age=?,email=?,imgSrc=? WHERE username=?;');
    if($stmt->execute(array(trim(strip_tags($name)),trim(strip_tags($age)),trim(strip_tags($email)),trim(strip_tags($imgSrc)),$user)))
		return 0;
	else return 1;
	}
	
	function updatePass($dbh,$user,$pass) {
	$stmt = $dbh->prepare('UPDATE User SET password=?WHERE username=?;');
	$options = ['cost' => 12];
	$encodedPass = password_hash($pass, PASSWORD_DEFAULT, $options);
    if($stmt->execute(array($encodedPass,$user)))
		return 0;
	else return 1;
	}
	
	function updateFav($dbh,$user,$id) {
	$stmt = $dbh->prepare('UPDATE User SET favRest=? WHERE username=?;');

    if($stmt->execute(array(trim(strip_tags($id)),$user)))
		return 0;
	else return 1;
	}
	
	function existUser($dbh,$username,$email) {	
	$stmt = $dbh->prepare('SELECT * FROM User WHERE username = ?;');
    $stmt->execute(array($username));
	if($stmt->fetch())
		return 1;
	else return 0;
	}
?>