<?php
	function postComment($dbh,$username,$restaurant,$userComment) {
	$stmt = $dbh->prepare('INSERT INTO Comment(username,restaurant,userComment) VALUES(?,?,?);');
    if($stmt->execute(array(trim(strip_tags($username)),trim(strip_tags($restaurant)),trim(strip_tags($userComment)))))
		return 0;
	else return 1;
	}
?>