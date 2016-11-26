<?php
	session_start();
	
	
	include_once('connection.php');
	include_once('userRegistration.php');
	include_once('userLogin.php');
	
	$response_array['status'] = 'serverIssues';
	
	$data = file_get_contents('php://input');
	if(isset($data)){
		$jsonData = json_decode($data);
		
		switch($jsonData->dicionario){
		case 'createUser':
			if(existUser($dbh,$jsonData->username,$jsonData->email)==0){
				if(createUser($dbh,$jsonData->name, $jsonData->username,$jsonData->age,$jsonData->email,$jsonData->password)==0)
					$response_array['status'] = 'success';
			}
			else $response_array['status'] = 'userExists';
			break;
		
		case 'loginUser':
			if(checkLogin($dbh,$jsonData->username,$jsonData->password)==0){
					$response_array['status'] = 'success';
			}
			else $response_array['status'] = 'userNotExists';
			break;
		}
	}
	echo json_encode($response_array);
?>