<?php
	
	function checkLogin($dbh,$username,$password) {
	$encodedPass = hash('sha256',$password );
	$stmt = $dbh->prepare('SELECT password FROM User WHERE username = ?;');
    if($stmt->execute(array($username)) && $stmt->fetch()[0]==$encodedPass)
		return 0;
	else return 1;
	}

?>