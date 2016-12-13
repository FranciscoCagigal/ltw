<?php
	function postComment($dbh,$username,$restaurant,$userComment) {
	$stmt = $dbh->prepare('INSERT INTO Comment(username,restaurant,userComment) VALUES(?,?,?);');
    if($stmt->execute(array($username,$restaurant,$userComment)))
		return 0;
	else return 1;
	}
?>