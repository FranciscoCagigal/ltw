<?php
	
	function createRestaurant($dbh,$owner,$name,$locationRes,$type,$openS,$closeS,$openFS,$closeFS,$price,$description,$lat,$lng,$image) {
	$stmt = $dbh->prepare('INSERT INTO Restaurant(name,location,total,votes,description,openS,closeS,openFS,closeFS,price,lat,lng,imgSrc,tipo,owner)
	VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);');
    if($stmt->execute(array(trim(strip_tags($name)),trim(strip_tags($locationRes)),0,0,trim(strip_tags($description)),trim(strip_tags($openS)),trim(strip_tags($closeS)),trim(strip_tags($openFS)),trim(strip_tags($closeFS)),trim(strip_tags($price)),trim(strip_tags($lat)),trim(strip_tags($lng)),trim(strip_tags($image)),trim(strip_tags($type)),trim(strip_tags($owner)))))
		return 0;
	else return 1;
	}
	
	function updateRestaurant($dbh,$id,$locationRes,$type,$openS,$closeS,$openFS,$closeFS,$price) {

	$stmt = $dbh->prepare('UPDATE Restaurant SET location=?,tipo=?,openS=?,closeS=?,openFS=?,closeFS=?,price=? WHERE id=?;');
    if($stmt->execute(array(trim(strip_tags($locationRes)),trim(strip_tags($type)),trim(strip_tags($openS)),trim(strip_tags($closeS)),trim(strip_tags($openFS)),trim(strip_tags($closeFS)),trim(strip_tags($price)),$id)))
		return 0;
	else return 1;
	}
?>