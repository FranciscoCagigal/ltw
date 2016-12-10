$(function (){
	
	$('load',function(){
		var idRest=($('.restaurant')[0].id).replace('rest','');
		var restData =
    {
	  'dicionario':'restById',
	  'id': idRest
    }
	$.ajax({
		type: "POST",
		url: "restController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(restData)
		}).done(function(data) {
			
		 if(data.status == 'success'){
			 console.log(data);
			 var resultHTML = $.map(data.info,function(item,index){
					var primaryDiv = $('<div class=restPrimary></div>');
					var imgDiv = $('<figure class=restImage><img src='+item.imgSrc+' width=200px height=160px;/></figure>');
					var divDescription = $('<div class=restDescription><a href = index.php?page=rest&id='+item.id+'>'+item.name+'</a></div>');
					var description = $('<p>'+item.description+'</p>');
					description.appendTo(divDescription);
					var list =$('<div class=restAttr><ul class=restList><li><span>Classificação Média: </span>'+item.total/item.votes+"<img src=images/restaurant/star.png width=15></></li><li><span>Localização: </span>"+item.location+'</li><li><span>Cozinha: </span>'+item.tipo+'</li><li><span>Preço médio: </span>'+item.price+'€</li><li><span>Horário semanal: </span><br>das '+item.openS +' às '+item.closeS+'</li><li><span>Horário fim de semana: </span><br>das '+item.openFS +' às '+item.closeFS+'</li></ul></div>')
					imgDiv.appendTo(primaryDiv);
					divDescription.appendTo(primaryDiv);
					list.appendTo(primaryDiv);
					return primaryDiv;
				});
			$('#rest1').append(resultHTML);
			
		 }
		 else if(data.status == 'notFound'){
			 alert('A página que procura não existe. Vai ser redirecionado para a página inical');
			 document.location.href='index.php?page=home',true;
		 }
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		
		}).fail(function(e) {
		console.log(e);
	});
	});
  
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