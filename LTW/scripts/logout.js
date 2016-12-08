$(function (){
	
	var userData =
	{
	'dicionario':'loggedUser',
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
			document.getElementById("logout").removeAttribute("hidden");
			var userData =
			{
			'dicionario':'usersRest',
			}
			$.ajax({
			type: "POST",
			url: "restController.php",
			contentType: "application/json",
			dataType: "json",
			data: JSON.stringify(userData)
			}).done(function(data) {
				
			 if(data.status == 'success'){
				console.log(data.info);
				
				var htmlString="";
				for(var i=0;i<data.info.length;i++){
					htmlString+='<li><a href=?page=rest&id='+data.info[i].id+'>'+data.info[i].name+'</a></li>';
				}
				$('#dropdownManager').append(htmlString);				
			 }
			 else if(data.status == 'serverIssues'){
				 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
			 }
		 
				}).fail(function(e) {
				console.log(e);
			});
		 } //final do 2º ajax
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		 
		}).fail(function(e) {
		console.log(e);
	});
	
	
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