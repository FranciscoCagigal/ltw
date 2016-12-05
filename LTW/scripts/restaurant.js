$(function (){
	
	
  
    $('.rating').on('click' , function(evt){

	evt.stopPropagation();
	evt.preventDefault();
	
	var radios = document.getElementsByClassName('rating');
	var value;
	
	for (var i = 0; i < radios[0].children.length; i++) {
		if (radios[0].children[i].children[0].type === 'radio' && radios[0].children[i].children[0].checked) {
			
			value = radios[0].children[i].children[0].value;
			break;
		}
	}
	
	var idRest=($('.restaurant')[0].id).replace('rest','');
	
		
    var restData =
    {
	  'dicionario':'vote',
	  'value': value,
	  'restaurant':idRest
    }
    $.ajax({
		type: "POST",
		url: "restController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(restData)
		}).done(function(data) {
			
		 if(data.status == 'success'){
			alert('Your have successfully voted!');
		 }
		 else if(data.status == 'voteUpdated'){
			 
			 alert('Your vote has been updated!');
		 }
		 else if(data.status == 'alreadyVoted'){
			 alert('Trouble updating your vote!');
		 }
		 else if(data.status == 'notLogged'){
			 alert('You must be logged in to vote!');
		 }
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		
		}).fail(function(e) {
		console.log(e);
	});

  });
});