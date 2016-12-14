<?php
	
	function checkLogin($dbh,$username,$password) {
	$encodedPass = hash('sha256',$password );
	$stmt = $dbh->prepare('SELECT password FROM User WHERE username = ?;');
    if($stmt->execute(array($username)) && password_verify($password, $stmt->fetch()['password']))
		return 0;
	else return 1;
	}
	
	function userInfo($dbh,$username){
		$stmt = $dbh->prepare('SELECT * FROM User WHERE username = ?;');
		if($stmt->execute(array($username)))
			return $stmt->fetchall();
		else return null;
	}

	/**function getLoginFail($dbh,$username){
		$stmt = $dbh->prepare('SELECT firstLoginError,loginErrorCount FROM User WHERE username = ?;');
		if($stmt->execute(array($username)))
			return $stmt->fetchall();
		else return null;
	}
	
	function updateLoginFail($dbh,$firstLoginError,$loginErrorCount,$username){
		$stmt = $dbh->prepare('UPDATE User SET firstLoginError=?,loginErrorCount=? WHERE username = ?;');
		if($stmt->execute(array($firstLoginError,$loginErrorCount,$username)))
			return 0;
		else return 1;
	}*/
?>