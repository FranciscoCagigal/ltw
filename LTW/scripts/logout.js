$(function (){
  $("#logout").on('click' , function(){

    var userData =
    {
	  'dicionario':'logoutUser',
    }
    $.ajax({
		type: "POST",
		url: "userController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(userData)
		}).done(function(data) {
			console.log(data);
		 if(data.status == 'success'){
			console.log('You hace logged out')
			document.location.href='index.php',true;
		 }
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		 
		}).fail(function(e) {
		console.log(e);
	});

  });
});