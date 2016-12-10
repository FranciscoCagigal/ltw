<?php
	
	function createRestaurant($dbh,$owner,$name,$locationRes,$type,$openS,$closeS,$openFS,$closeFS,$price,$description, $image) {
				error_log($image);

	$stmt = $dbh->prepare('INSERT INTO Restaurant(name,location,total,votes,description,openS,closeS,openFS,closeFS,price,imgSrc,tipo,owner)
	VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);');
    if($stmt->execute(array($name,$locationRes,0,0,$description,$openS,$closeS,$openFS,$closeFS,$price,$image,$type,$owner)))
		return 0;
	else return 1;
	}
?>