<?php
	
	function hasAlreadyVoted($dbh,$username,$restId) {

	$stmt = $dbh->prepare('SELECT * FROM Vote WHERE username=? AND restaurant=?;');
    if($stmt->execute(array($username,$restId)))
		return $stmt->fetchAll();
	else return null;
	}
	
	function createVote($dbh,$username,$restId,$value) {

	$stmt = $dbh->prepare('INSERT INTO Vote(username,restaurant,vote) VALUES(?,?,?);');
    if($stmt->execute(array($username,$restId,$value)))
		return true;
	else return false;
	}
	
	function updateVote($dbh,$username,$restId,$value) {

	$stmt = $dbh->prepare('UPDATE Vote SET vote = ? WHERE username=? AND restaurant=?;');
    if($stmt->execute(array($value,$username,$restId)))
		return true;
	else return false;
	}
	
	
?>