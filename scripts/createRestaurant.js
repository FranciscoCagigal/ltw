var image = {value: ''};
var marker;
$(function (){
	
	$('load',function(){
		  var mapCanvas = document.getElementById("mapCreate");
		  var mapOptions = {
			center: new google.maps.LatLng(41.1579, -8.6291),
			zoom: 14
		  }
		  var map = new google.maps.Map(mapCanvas, mapOptions);
		  marker = new google.maps.Marker({draggable:true});
			marker.setPosition(new google.maps.LatLng(41.1579,  -8.6291));
			marker.setMap(map);
	});
  $('#fileToUpload').on('change',function(){
		var file = $('#fileToUpload')[0].files[0];
		if(file.type.match(/image\/(jpeg|png|jpg|gif)/)!=null)
		{
			if(file.size<5000000){
				var tmppath = URL.createObjectURL(file);
				var resultHtml='<figure class=userUpload><img src='+escapeHtml(tmppath)+' width=200px;/></figure>';
				$('#imageUp').empty().append(resultHtml);
			}
			else{
				$('#fileToUpload').val('');
				alert('Imagem demasiado grande');
			}
			
		}
		else{
			$('#fileToUpload').val('');
			alert('Formato não suportado');
		}
		
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
	var lat = marker.getPosition().lat();
	var lng = marker.getPosition().lng();
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
	  'lat': lat,
	  'lng':lng,
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
			document.location.href='?page=home';
		 }
		 else if(data.status == 'notLogged'){
			 alert('You need to log in to create a restaurant');
			 document.location.href='?page=login';
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