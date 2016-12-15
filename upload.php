<?php

$response_array['status'] = 'serverIssues';

if(isset($_POST['path'])){
	$target_dir = $_POST['path'];
	$target_file = $target_dir . basename($_FILES['fileToUpload']['name']);

	$temp = explode(".", $_FILES["fileToUpload"]["name"]);
	$newfilename = round(microtime(true)) . '.' . end($temp);
	if (move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_dir . $newfilename)) {  
		$response_array['status'] = 'success';
		$response_array['name'] = $target_dir . $newfilename;
	} else {
		$response_array['status'] = 'File was not uploaded.';
	}

	header("Content-Type: application/json", true);
}
echo json_encode($response_array);
?>