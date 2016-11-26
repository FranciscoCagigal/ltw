$(function (){
  $("#submit").on('click' , function(){

	var username=$('#username').val();
    var password=$('#password').val();
	
    if (username==""||password == "")
      alert("All fields must be filled for registration");
    else {
    var userData =
    {
	  'dicionario':'loginUser',
	  'username':username,
      'password':password
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
			document.location.href='index.php?page=rests',true;
		 }
		 else if(data.status == 'userNotExists'){
			 alert('username or password incorrect/s');
		 }
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		 
		}).fail(function(e) {
		console.log(e);
	});

  }
  });

  $("#cancel").on('click' , function(){
    alert('cancelei');
  });
});