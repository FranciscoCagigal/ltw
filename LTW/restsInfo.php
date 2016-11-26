<?php
	
	function getAllRestaurantsInfo($dbh) {

	$stmt = $dbh->prepare('SELECT * FROM Restaurant;');
    if($stmt->execute(array()))
		return $stmt->fetchAll();
	else return null;
	}
?>