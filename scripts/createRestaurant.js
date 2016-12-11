var image = {value: ''};

$(function (){
	
  $('#fileToUpload').on('change',function(){
		var file = $('#fileToUpload')[0].files[0];
		var tmppath = URL.createObjectURL(file);
		var resultHtml='<figure class=userUpload><img src='+tmppath+' width=200px;/></figure>';
		$('#imageUp').empty().append(resultHtml);
	});	

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
	
    if (name==""||locationRes == ""||type == ""||openS == ""||closeS == ""||openFS == ""||closeFS == ""||price == ""||$('#fileToUpload')[0].files.length==0)
      alert("All fields must be filled for registration");
    else {
	if($('#fileToUpload')[0].files.length>0)
	{
		var imageSource;
		uploadFile('images/restsLogo/', $('#fileToUpload')[0].files[0],function(imageSource){image.value=imageSource});
	}
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



function uploadFile(path,file,returnValue){
	//var imageUp;
	var formdata = new FormData();
	formdata.append("fileToUpload", file);
	formdata.append("path",path);
	$.ajax({
		type: 'post',
        url: 'upload.php',
        cache: false,
       	contentType: false,
       	processData: false,
		async:false,
        data: formdata,
        success: function (data) {
        	if(data.status == 'success'){
        		//image.value = data.name;
				returnValue(data.name);
        	}
    }
	});
}