<?php 
	session_start();
	
	include_once('connection.php');
	include_once('restsInfo.php');
	

	$response_array['status'] = 'serverIssues';
	$data = file_get_contents('php://input');
	
	if(isset($data)){
		$jsonData = json_decode($data);
		
		switch($jsonData->dicionario){
		case 'allRestaurants':
			if(($response_array['info']=getAllRestaurantsInfo($dbh))!=null){
				$response_array['status'] = 'success';
			}
			break;
		}
	}
	echo json_encode($response_array);


?>