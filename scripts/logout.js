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
		 if(data.status == 'success'){
			document.getElementById("registBtn").setAttribute("hidden",true);
			document.getElementById("loginBtn").setAttribute("hidden",true);
			$('#nav-user').show();
			$('#nav-rest').show();
			
			if(data.info[0].favRest!=null)
				$('#favRestLink').prop('href','?page=rest&id='+escapeHtml(data.info[0].favRest));
			$('#linkToProfile').prop('href','?page=userProfile&user='+escapeHtml(data.info[0].username));
			$('#linkToChangePass').prop('href','?page=userProfile&user='+escapeHtml(data.info[0].username)+'#password');
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
				
				var htmlString="";
				for(var i=0;i<data.info.length;i++){
					htmlString+='<li><a href=?page=rest&id='+escapeHtml(data.info[i].id)+'>'+escapeHtml(data.info[i].name)+'</a></li>';
				}
				$('#dropdownManager').append(htmlString);				
			 }
			 
		 
				}).fail(function(e) {
				console.log(e);
			});
		 } 
		 else if(data.status == 'not'){
			$('#nav-user').hide();
			$('#nav-rest').hide();
		 }
		 else if(data.status == 'serverIssues'){
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

var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}