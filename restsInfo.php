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
	
	function restsOwner($dbh,$username){
		$stmt = $dbh->prepare('SELECT * FROM Restaurant WHERE owner = ?;');
		if($stmt->execute(array($username)))
			return $stmt->fetchAll();
		else return null;	
	}
	
	function getRestById($dbh,$id){
		$stmt = $dbh->prepare('SELECT * FROM Restaurant WHERE id = ?;');
		if($stmt->execute(array($id)))
			return $stmt->fetchAll();
		else return null;	
	}
	
	function getRestByName($dbh,$name){
		$stmt = $dbh->prepare('SELECT * FROM Restaurant WHERE name = ?;');
		if($stmt->execute(array($name)))
			return $stmt->fetchAll();
		else return null;	
	}
	function getRestByLocation($dbh,$location){
		$stmt = $dbh->prepare('SELECT * FROM Restaurant WHERE location = ?;');
		if($stmt->execute(array($location)))
			return $stmt->fetchAll();
		else return null;	
	}
	
	function getRestByCuisine($dbh,$cuisine){
		$stmt = $dbh->prepare('SELECT * FROM Restaurant WHERE tipo = ?;');
		if($stmt->execute(array($cuisine)))
			return $stmt->fetchAll();
		else return null;	
	}
	
	function getRestByCuisineAndLocation($dbh,$cuisine,$location){
		$stmt = $dbh->prepare('SELECT * FROM Restaurant WHERE tipo = ? AND location = ?;');
		if($stmt->execute(array($cuisine,$location)))
			return $stmt->fetchAll();
		else return null;	
	}
	
	function getRestTop5Rating($dbh){
		$stmt = $dbh->prepare('SELECT * FROM Restaurant ORDER BY total/votes DESC LIMIT 5;');
		if($stmt->execute())
			return $stmt->fetchAll();
		else return null;	
	}
	
	function getcommentsOfRest($dbh,$id){
		$stmt = $dbh->prepare('SELECT * FROM Comment WHERE restaurant=?;');
		if($stmt->execute(array($id)))
			return $stmt->fetchAll();
		else return null;	
	}
	
?>