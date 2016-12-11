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
					$_SESSION['username'] = $jsonData->username;
			}
			else $response_array['status'] = 'userNotExists';
			break;
			
		case 'logoutUser':
			if(isset($_SESSION['username']))
			{	
				session_unset();
				session_destroy();
				$response_array['status'] = 'success';
			}
			break;
			
		case 'loggedUser':
			if(isset($_SESSION['username']))
			{	
				$response_array['status'] = 'success';
				$response_array['info'] = $_SESSION['username'];
			}
			else $response_array['status'] = 'not';
			break;
			
		case 'amILogged':
			if(isset($_SESSION['username'])&&$_SESSION['username']==$jsonData->user)
			{	
				$response_array['status'] = 'success';
			}else  $response_array['status'] = 'userNotLogged';
			break;
		
		case 'userInfo':
			if(($response_array['info']=userInfo($dbh,$jsonData->user))!=null){
				$response_array['status']='success';
				if(isset($_SESSION['username'])&&$_SESSION['username']==$jsonData->user)
				{	
					$response_array['myUser'] = true;
				}else $response_array['myUser'] = false;
			}else $response_array['status']='notFound';
			break;
			
		case 'updateUser':
			if(isset($_SESSION['username']) && $_SESSION['username']==$jsonData->user)
			{	
				if(updateUser($dbh,$jsonData->name,$jsonData->user,$jsonData->age,$jsonData->email)==0)
					$response_array['status'] = 'success';
			}else  $response_array['status'] = 'userNotLogged';
			break;
		
		case 'changePass':
			if(isset($_SESSION['username']) && $_SESSION['username']==$jsonData->user)
			{	
				if(checkLogin($dbh,$jsonData->user,$jsonData->oldPass)==0){
					if(updatePass($dbh,$jsonData->user,$jsonData->newPass)==0){
						$response_array['status']='success';
					}
				}else  $response_array['status'] = 'wrongPass';
			}
			break;
			
		}
		
		
		
	}
	echo json_encode($response_array);
?>