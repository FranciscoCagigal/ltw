<?php
	
	function createRestaurant($dbh,$owner,$name,$locationRes,$type,$openS,$closeS,$openFS,$closeFS,$price,$description,$lat,$lng,$image) {
	$stmt = $dbh->prepare('INSERT INTO Restaurant(name,location,total,votes,description,openS,closeS,openFS,closeFS,price,lat,lng,imgSrc,tipo,owner)
	VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);');
    if($stmt->execute(array($name,$locationRes,0,0,$description,$openS,$closeS,$openFS,$closeFS,$price,$lat,$lng,$image,$type,$owner)))
		return 0;
	else return 1;
	}
	
	function updateRestaurant($dbh,$id,$locationRes,$type,$openS,$closeS,$openFS,$closeFS,$price) {

	$stmt = $dbh->prepare('UPDATE Restaurant SET location=?,tipo=?,openS=?,closeS=?,openFS=?,closeFS=?,price=? WHERE id=?;');
    if($stmt->execute(array($locationRes,$type,$openS,$closeS,$openFS,$closeFS,$price,$id)))
		return 0;
	else return 1;
	}
?>