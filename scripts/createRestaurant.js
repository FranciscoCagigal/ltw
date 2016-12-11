var image = {value: ''};

$(function (){
  // $('#upload').on('click',function(){
	 //  console.log('oi');
	 // $('#myFile').upload('xhr2.php',function(success){
	 // console.log('done');},$('#prog'));
	 // console.log($('#myFile'));
	 // var tmppath = URL.createObjectURL($('#myFile')[0].files[0]);
	 // console.log(tmppath);
	 // var imageUp= "<img alt=oi src="+tmppath+">";
	 // $('#imageUp').append(imageUp);
	 // });

  $("#submit").on('click' , function(){
	var name=$('#name').val();
    var locationRes=$('#location').val();
	var type=$('#type').val();
    var description=$('#description').val();
	var openS=$('#openS').val();
    var closeS=$('#closeS').val();
	var openFS=$('#openFS').val();
    var closeFS=$('#closeFS').val();
	var price=$('#price').val();
	
    if (name==""||locationRes == ""||type == ""||openS == ""||closeS == ""||openFS == ""||closeFS == ""||price == "" || image == "")
      alert("All fields must be filled for registration");
    else {
	if(description==null)
		description="";
    var userData =
    {
	  'dicionario':'createRestaurant',
	  'name':name,
      'locationRes':locationRes,
	  'type':type,
      'openS':openS,
	  'closeS':closeS,
      'openFS':openFS,
	  'closeFS':closeFS,
      'price':price,
	  'description':description,
	  'image':image.value
    }
    $.ajax({
		type: "POST",
		url: "restController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(userData)}).done(function(data) {
			console.log(image);
		 if(data.status == 'success'){
			alert('Restaurant successfully created!');		
		 }
		 else if(data.status == 'notLogged'){
			 alert('You need to log in to create a restaurant');
		 }
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		}).fail(function(e) {
		console.log(e);
	});

	}
  });
});

function uploadFile(){
	var file = $('#fileToUpload')[0].files[0];
	var formdata = new FormData();
	formdata.append("fileToUpload", file);
	$.ajax({
		type: 'post',
        url: 'upload.php',
        cache: false,
       	contentType: false,
       	processData: false,
        data: formdata,
        success: function (data) {
        	if(data.status == 'success'){
        		image.value = data.name;
        		console.log(image.value);
        	}
        	else if(data.status == 'serverIssues'){
				 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
			 }
    }
	});
}