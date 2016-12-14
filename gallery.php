<?php
	
	function postPhoto($dbh,$id,$imgSrc,$username) {
		$time=time();
		$stmt = $dbh->prepare('INSERT INTO Gallery(username,restaurant,imgSrc,insertionDate) VALUES(?,?,?,?);');
		if($stmt->execute(array($username,$id,$imgSrc,$time)))
			return 0;
		else return 1;
	}
	
	function getPhotos($dbh,$id) {
		$stmt = $dbh->prepare('SELECT * FROM Gallery WHERE restaurant=? ORDER BY insertionDate DESC LIMIT 5;');
		if($stmt->execute(array($id)))
			return $stmt->fetchall();
		else return null;
	}
	
?>