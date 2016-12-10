<?php
$target_dir = 'images/restsLogo/';
$target_file = $target_dir . basename($_FILES['fileToUpload']['name']);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

$response_array['status'] = 'serverIssues';

// Check if image file is a actual image or fake image
if(isset($_POST['submit'])) {
    $check = getimagesize($_FILES['fileToUpload']['tmp_name']);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        $response_array['status'] = 'File is not an image.';
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    $response_array['status'] = 'File already exists.';
    $uploadOk = 0;
}
// Check file size
if ($_FILES['fileToUpload']['size'] > 5000000) {
    $response_array['status'] = 'File is too large.';
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != 'jpg' && $imageFileType != 'png' && $imageFileType != 'jpeg'
&& $imageFileType != 'gif' ) {
    $response_array['status'] = 'File type is not allowed.';
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    $response_array['status'] = 'File was not uploaded.';
// if everything is ok, try to upload file
} else {
    $temp = explode(".", $_FILES["fileToUpload"]["name"]);
    $newfilename = round(microtime(true)) . '.' . end($temp);
    if (move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_dir . $newfilename)) {  
        $response_array['status'] = 'success';
        $response_array['name'] = $target_dir . $newfilename;
    } else {
        $response_array['status'] = 'File was not uploaded.';
    }

    header("Content-Type: application/json", true);
    echo json_encode($response_array);
}
?>