<?php
	
	function getAllRestaurantsInfo($dbh) {

	$stmt = $dbh->prepare('SELECT * FROM Restaurant;');
    if($stmt->execute(array()))
		return $stmt->fetchAll();
	else return null;
	}
	
	function getVoteInfo($dbh,$id){
		$stmt = $dbh->prepare('SELECT total,votes FROM Restaurant WHERE id = ?;');
		if($stmt->execute(array($id)))
			return $stmt->fetchAll();
		else return null;	
	}
	
	function updateVoteInfo($dbh,$id,$total,$votes){
		$stmt = $dbh->prepare('UPDATE Restaurant SET total=?,votes=? WHERE id = ?;');
		if($stmt->execute(array($total,$votes,$id)))
			return true;
		else return false;	
	}
	
?>