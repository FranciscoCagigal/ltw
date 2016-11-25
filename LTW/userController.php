<?php
	session_start();
	
	include_once('connection.php');
	include_once('userRegistration.php');
	
	$response_array['status'] = 'serverIssues';
	
	
	if(isset( $_POST['dicionario']))
	{
		switch( $_POST['dicionario']){
		case 'createUser':
			if(isset( $_POST['name'])&& isset( $_POST['username'])&&isset( $_POST['age'])&&isset( $_POST['email'])&&isset( $_POST['password'])){
				if(existUser($dbh,$_POST['username'],$_POST['email'])==0){
					//if(createUser($dbh,$_POST['name'], $_POST['username'],$_POST['age'],$_POST['email'],$_POST['password'])==0)
						$response_array['status'] = 'success';
				}
				else $response_array['status'] = 'userExists';
				
			}
			break;
		}
	}
	
	echo json_encode($response_array);
?>