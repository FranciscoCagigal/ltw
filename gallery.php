<?php
	
	function postPhoto($dbh,$id,$imgSrc) {
	$stmt = $dbh->prepare('INSERT INTO Gallery(restaurant,imgSrc) VALUES(?,?);');
    if($stmt->execute(array($id,$imgSrc)))
		return 0;
	else return 1;
	}
	
?>