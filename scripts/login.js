$(function (){
	//solucao para o chrome para nao preencher password
	$('.fake-autofill-fields').show();
        window.setTimeout(function () {
            $('.fake-autofill-fields').hide();
        },1);
	
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
			
		 if(data.status == 'success'){
			document.location.href='index.php?page=rests',true;
			
		 }
		 else if(data.status == 'lockedOut'){
			 alert('Demasiadas tentativas erradas. Tente novamente daqui a 5min');
		 }
		 else if(data.status == 'fail'){
			 alert('Palavra passe ou username incorretos/s');
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
    document.location.href='index.php?page=home',true;
  });
});