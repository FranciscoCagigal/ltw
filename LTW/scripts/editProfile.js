$(function (){
		
	//load da pagina
	$('load',function(){
	
	var restData =
    {
	  'dicionario':'userInfo',
	  'user': document.location.href.split('user=')[1]
    }
    $.ajax({
		type: "POST",
		url: "userController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(restData)
		}).done(function(data) {
		 if(data.status == 'success'){
			 console.log(data);
			 $('#name').prop('value',data.info[0].name);
			 $('#age').prop('value',data.info[0].age);
			 $('#email').prop('value',data.info[0].email);
			 if(data.myUser)
				 $('#editBtn').removeAttr('hidden');
		 }
		 else if(data.status == 'notFound'){
			 alert('O usuário que procura não existe');
			document.location.href='?page=home';
		 }
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		 
		}).fail(function(e) {
		console.log(e);
	});
	
	
});
	$('#editBtn').on('click',function(){
		var userData =
			{
			  'dicionario':'amILogged',
			  'user': document.location.href.split('user=')[1]
			}
			$.ajax({
				type: "POST",
				url: "userController.php",
				contentType: "application/json",
				dataType: "json",
				data: JSON.stringify(userData)
				}).done(function(data) {
					if(data.status='success'){
						$('#name').removeAttr('disabled');
						$('#age').removeAttr('disabled');
						$('#email').removeAttr('disabled');
						$('#editBtn').prop('hidden',true);
						$('#saveEdit').prop('hidden',false);
					}
					else if(data.status == 'serverIssues'){
						 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
					 }
				}).fail(function(e) {
				console.log(e);
			});
	});
	
	$('#saveEdit').on('click',function(){
		
		var name=$('#name').val();
		var age=$('#age').val();
		var email=$('#email').val();
		
		if(email==""||age==""||name==""){
			console.log('Todos os campos devem estar preenchidos');
		}else{
			var userData =
				{
				  'dicionario':'updateUser',
				  'name': name,
				  'age': age,
				  'email': email,
				  'user': document.location.href.split('user=')[1]
				}
				$.ajax({
					type: "POST",
					url: "userController.php",
					contentType: "application/json",
					dataType: "json",
					data: JSON.stringify(userData)
					}).done(function(data) {
						if(data.status='success'){
							$('#name').prop('disabled',true);
							$('#age').prop('disabled',true);
							$('#email').prop('disabled',true);
							$('#editBtn').prop('hidden',false);
							$('#saveEdit').prop('hidden',true);
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