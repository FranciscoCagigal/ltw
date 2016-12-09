<?php 
	session_start();
	
	include_once('connection.php');
	include_once('restsInfo.php');
	include_once('restPutInfo.php');
	include_once('vote.php');
	

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
		
		case 'vote':
			if(isset($_SESSION['username'])){
				if(($result=hasAlreadyVoted($dbh,$_SESSION['username'],$jsonData->restaurant))==null){
					$stats=getVoteInfo($dbh,$jsonData->restaurant);
					foreach($stats as $row) {
					   $votes = $row['votes'];
					   $total = $row['total'];
					}
					$votes+=1;
					$total += $jsonData->value;
					if(createVote($dbh,$_SESSION['username'],$jsonData->restaurant,$jsonData->value) && updateVoteInfo($dbh,$jsonData->restaurant,$total,$votes))
						$response_array['status'] = 'success';
				}else{
					foreach($result as $row) {
					   $vote = $row['vote'];
					}
					$stats=getVoteInfo($dbh,$jsonData->restaurant);
					foreach($stats as $row) {
						$votes = $row['votes'];
					   $total = $row['total'];
					}
					$total = $total-$vote+$jsonData->value;
					if(updateVote($dbh,$_SESSION['username'],$jsonData->restaurant,$jsonData->value)&&updateVoteInfo($dbh,$jsonData->restaurant,$total,$votes))
						$response_array['status'] = 'voteUpdated';
					else $response_array['status'] = 'alreadyVoted';
				}
			}
			else $response_array['status'] = 'notLogged';
			break;
		
		case 'createRestaurant':
			if(isset($_SESSION['username'])){
				if(createRestaurant($dbh,$_SESSION['username'],$jsonData->name,$jsonData->locationRes,$jsonData->type,$jsonData->openS,$jsonData->closeS,$jsonData->openFS,$jsonData->closeFS,$jsonData->price,$jsonData->description)==0)
					$response_array['status'] = 'success';
			}else $response_array['status'] = 'notLogged';
			break;
		
		case 'usersRest':
			if(isset($_SESSION['username'])){
					if(($response_array['info']=restsOwner($dbh,$_SESSION['username']))!=null)
					{
						$response_array['status'] = 'success';
					}
			}
			break;
		
		case 'restByName':
			if(($response_array['info']=getRestByName($dbh,$jsonData->name))!=null)
				{
					$response_array['status'] = 'success';
				}else $response_array['status'] = 'notFound';
			break;
			
		case 'restByLocCui':
			if($jsonData->location=='Todos' && $jsonData->cuisine!='Todos'){
				if(($response_array['info']=getRestByCuisine($dbh,$jsonData->cuisine))!=null)
				{
					$response_array['status'] = 'success';
				}else $response_array['status'] = 'notFound';
			}
			else if($jsonData->cuisine=='Todos' && $jsonData->location!='Todos'){
				if(($response_array['info']=getRestByLocation($dbh,$jsonData->location))!=null)
				{
					$response_array['status'] = 'success';
				}else $response_array['status'] = 'notFound';
			}
			else if($jsonData->cuisine=='Todos' && $jsonData->location=='Todos'){
				if(($response_array['info']=getAllRestaurantsInfo($dbh))!=null){
					$response_array['status'] = 'success';
				}
			}
			else{
				if(($response_array['info']=getRestByCuisineAndLocation($dbh,$jsonData->cuisine,$jsonData->location))!=null)
				{
					$response_array['status'] = 'success';
				}else $response_array['status'] = 'notFound';
			}
			
			break;
			
		case 'restById':
				if(($response_array['info']=getRestById($dbh,$jsonData->id))!=null)
				{
					$response_array['status'] = 'success';
				}else $response_array['status'] = 'notFound';
			break;
		
		}
		
		
	}
	echo json_encode($response_array);


?>