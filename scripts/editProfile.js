$(function (){
		
	$('#imgToUpload').on('change',function(){
		var file = $('#imgToUpload')[0].files[0];
		var tmppath = URL.createObjectURL(file);
		var resultHtml='<figure class=userUpload><img src='+tmppath+' width=200px height=200px;/></figure>';
		$('#appendImgHere').empty().append(resultHtml);
	});	
		
	//load da pagina
	$('load',function(){
	var index=document.location.href.split('user=')[1].search(/[#&]/);
	var user;
	if(index!=-1){
		user=document.location.href.split('user=')[1].slice(0,index);
	}
	else user=document.location.href.split('user=')[1];
	
	var restData =
    {
	  'dicionario':'userInfo',
	  'user': user
    }
    $.ajax({
		type: "POST",
		url: "userController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(restData)
		}).done(function(data) {
		 if(data.status == 'success'){
			 var resultHtml='<figure class=userUpload><img src='+data.info[0].imgSrc+' width=200px height=200px;/></figure>';
			 $('#appendImgHere').append(resultHtml);
			 $('#name').prop('value',data.info[0].name);
			 $('#age').prop('value',data.info[0].age);
			 $('#email').prop('value',data.info[0].email);
			 if(data.myUser)
			 {
				 $('#editBtn').removeAttr('hidden');
				 $('.changePasswordDiv').removeAttr('hidden');
			 }
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
		var index=document.location.href.split('user=')[1].search(/[#&]/);
		var user;
		if(index!=-1){
			user=document.location.href.split('user=')[1].slice(0,index);
		}
		else user=document.location.href.split('user=')[1];
		
		var userData =
			{
			  'dicionario':'amILogged',
			  'user': user
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
						$('#imgToUpload').removeAttr('hidden');
					}
					else if(data.status == 'serverIssues'){
						 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
					 }
				}).fail(function(e) {
				console.log(e);
			});
	});
	
	$('#changePass').on('click',function(){
		var oldPass=$('#oldPass').val();
		var newPass=$('#newPass').val();
		
		var index=document.location.href.split('user=')[1].search(/[#&]/);
		var user;
		if(index!=-1){
			user=document.location.href.split('user=')[1].slice(0,index);
		}
		else user=user;
		
		if(newPass=="" || oldPass==""){
			alert('Os campos devem estar preenchidos');
		}
		else{
			var userData=	{
				'dicionario':'changePass',
				'oldPass':oldPass,
				'user': document.location.href.split('user=')[1],
				'newPass':newPass
			}
			$.ajax({
					type: "POST",
					url: "userController.php",
					contentType: "application/json",
					dataType: "json",
					data: JSON.stringify(userData)
					}).done(function(data) {
						if(data.status=='success'){
							alert('Palavre-passe alterada com sucesso');
						}
						else if(data.status == 'wrongPass'){
							alert('Palavre-passe errada!');
						}
						else if(data.status == 'serverIssues'){
							alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
						}
					}).fail(function(e) {
					console.log(e);
				});
		}
	});
	
	$('#saveEdit').on('click',function(){
			
		var name=$('#name').val();
		var age=$('#age').val();
		var email=$('#email').val();
		
		if(email==""||age==""||name==""){
			alert('Todos os campos devem estar preenchidos');
		}else{
			var imgSrc='images/usersProfile/none.png';
			if($('#appendImgHere')[0].children[0].children[0].attributes[0].nodeValue!="images/usersProfile/none.png" && $('#appendImgHere')[0].children[0].children[0].attributes[0].nodeValue.split('images/usersProfile/')[1]!=null){
				imgSrc=$('#appendImgHere')[0].children[0].children[0].attributes[0].nodeValue;
			}
			else if($('#imgToUpload')[0].files.length>0){
				$.getScript('scripts/createRestaurant.js', function (data) {
					var imageSrc;
					uploadFile('images/usersProfile/',$('#imgToUpload')[0].files[0],function(imageSrc){
					imgSrc=imageSrc;});
				});
			}
			setTimeout(function(){
			var userData =
				{
				  'dicionario':'updateUser',
				  'name': name,
				  'age': age,
				  'email': email,
				  'imgSrc':imgSrc,
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
							$('#imgToUpload').prop('hidden',true);
							alert('Perfil atualizado com sucesso');
						}
						else if(data.status == 'serverIssues'){
							 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
						 }
					}).fail(function(e) {
					console.log(e);
			});},500);
		}
	});
});