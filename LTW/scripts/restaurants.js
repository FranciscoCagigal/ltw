$(function (){
	
	$('#Selector-content').on('change',function(){
		var locationRest = $("#locationSearch").val();
		var cuisine = $("#cuisineSearch").val();
		var restData =
			{
			  'dicionario':'restByLocCui',
			  'location': locationRest,
			  'cuisine' : cuisine
			}
			$.ajax({
			type: "POST",
			url: "restController.php",
			contentType: "application/json",
			dataType: "json",
			data: JSON.stringify(restData)
			}).done(function(data) {
				
				console.log(data);
				//limpar
				var myNode = document.getElementById("restsList");
				while (myNode.firstChild) {
					myNode.removeChild(myNode.firstChild);
				}
				myNode = document.getElementById("results");
				while (myNode.firstChild) {
					myNode.removeChild(myNode.firstChild);
				}
			 if(data.status == 'success'){
				var resultHTML = $.map(data.info,function(item,index){
					var listItem = $('<li></li>');
					var imgDiv = $('<figure class=restLogo><img src='+item.imgSrc+' width=100px height=80px;/></figure>');
					var divDescription = $('<div class=descriptionRest><a href = index.php?page=rest&id='+item.id+'>'+item.name+'</a></div>');
					var description = $('<p>'+item.description+'</p>');
					description.appendTo(divDescription);
					var divItem = $('<div class=restaurantItem></div>');
					divItem.appendTo(listItem);
					var sectionItem = $('<section id=' + item.id + '></section>');
					var list =$('<div class=attributes><ul class=restList><li><span>Classificação Média: </span>'+item.total/item.votes+"<img src=images/restaurant/star.png width=20></></li><li><span>Localização: </span>"+item.location+'</li><li><span>Cozinha: </span>'+item.tipo+'</li><li><span>Preço médio: </span>'+item.price+'€</li></ul></div>')
					imgDiv.appendTo(sectionItem);
					divDescription.appendTo(sectionItem);
					sectionItem.appendTo(divItem);
					list.appendTo(sectionItem);
					return listItem;
				});
				/*var resultHTML="";
				for(var i=0;i<data.info.length;i++){
				resultHTML+="<div class=RestaurantItem>";
				resultHTML+="<section id="+data.info[i].id+"><a href=index.php?page=rest"+"&id="+data.info[i].id+">"+data.info[i].name +"</a><ul class=restList><span>Classificação Média: </span><p>"+data.info[i].total/data.info[i].votes+"<img src=images/restaurant/star.png width=30></></ul></section>" ;
				resultHTML+="</div>";
				}*/
				//colocar
				$('#restsList').html(resultHTML);
				var numberResults="Foi encontrado "+data.info.length+" resultado(s)";
				$('#results').append(numberResults);
			 }
			 else if(data.status == 'notFound'){
				//colocar
				var numberResults="Não foram encontrados resultados para a sua pesquisa";
				$('#results').append(numberResults);
			 }
			 else if(data.status == 'serverIssues'){
				 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
			 }
			 
			}).fail(function(e) {
			console.log(e);
		});
	});
	
	$('#searchButton').on('click',function(){
		var name = $("#restName").val();
		if(name!=""){
			var restData =
			{
			  'dicionario':'restByName',
			  'name': name
			}
			$.ajax({
			type: "POST",
			url: "restController.php",
			contentType: "application/json",
			dataType: "json",
			data: JSON.stringify(restData)
			}).done(function(data) {
				//limpar
				var myNode = document.getElementById("restsList");
				while (myNode.firstChild) {
					myNode.removeChild(myNode.firstChild);
				}
				myNode = document.getElementById("results");
				while (myNode.firstChild) {
					myNode.removeChild(myNode.firstChild);
				}
			 if(data.status == 'success'){
				 
			var resultHTML = $.map(data.info,function(item,index){
				var listItem = $('<li></li>');
				var imgDiv = $('<figure class=restLogo><img src='+item.imgSrc+' width=100px height=80px;/></figure>');
				var divDescription = $('<div class=descriptionRest><a href = index.php?page=rest&id='+item.id+'>'+item.name+'</a></div>');
				var description = $('<p>'+item.description+'</p>');
				description.appendTo(divDescription);
				var divItem = $('<div class=restaurantItem></div>');
				divItem.appendTo(listItem);
				var sectionItem = $('<section id=' + item.id + '></section>');
				var list =$('<div class=attributes><ul class=restList><li><span>Classificação Média: </span>'+item.total/item.votes+"<img src=images/restaurant/star.png width=20></></li><li><span>Localização: </span>"+item.location+'</li><li><span>Cozinha: </span>'+item.tipo+'</li><li><span>Preço médio: </span>'+item.price+'€</li></ul></div>')
				imgDiv.appendTo(sectionItem);
				divDescription.appendTo(sectionItem);
				sectionItem.appendTo(divItem);
				list.appendTo(sectionItem);
				return listItem;
			});
				
				/*var resultHTML="";
				resultHTML+="<div class=RestaurantItem>";
				resultHTML+="<section id="+data.info[0].id+"><a href=index.php?page=rest"+"&id="+data.info[0].id+">"+data.info[0].name +"</a><ul class=restList><span>Classificação Média: </span><p>"+data.info[0].total/data.info[0].votes+"<img src=images/restaurant/star.png width=30></></ul></section>" ;
				resultHTML+="</div>";*/
				//colocar
				$('#restsList').append(resultHTML);
				var numberResults="Foi encontrado 1 resultado";
				$('#results').append(numberResults);
			 }
			 else if(data.status == 'notFound'){
				//colocar
				var numberResults="Não foram encontrados resultados para a sua pesquisa";
				$('#results').append(numberResults);
			 }
			 else if(data.status == 'serverIssues'){
				 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
			 }
			 
			}).fail(function(e) {
			console.log(e);
		});
		}
		
	});
	
	//load da pagina
	$('load',function(){
		
	var locationRest = $("#locationSearch").val();
	var cuisine = $("#cuisineSearch").val();
	
	if(locationRest!='Todos'||cuisine!='Todos'){
		console.log('passeui aqui');
		$('#Selector-content').change(); //forçar evento
	}
	else{
		var restData =
    {
	  'dicionario':'allRestaurants'
    }
    $.ajax({
		type: "POST",
		url: "restController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(restData)
		}).done(function(data) {
		 if(data.status == 'success'){
			var resultHTML = $.map(data.info,function(item,index){
				var listItem = $('<li></li>');
				var imgDiv = $('<figure class=restLogo><img src='+item.imgSrc+' width=100px height=80px;/></figure>');
				var divDescription = $('<div class=descriptionRest><a href = index.php?page=rest&id='+item.id+'>'+item.name+'</a></div>');
				var description = $('<p>'+item.description+'</p>');
				description.appendTo(divDescription);
				var divItem = $('<div class=restaurantItem></div>');
				divItem.appendTo(listItem);
				var sectionItem = $('<section id=' + item.id + '></section>');
				var list =$('<div class=attributes><ul class=restList><li><span>Classificação Média: </span>'+item.total/item.votes+"<img src=images/restaurant/star.png width=20></></li><li><span>Localização: </span>"+item.location+'</li><li><span>Cozinha: </span>'+item.tipo+'</li><li><span>Preço médio: </span>'+item.price+'€</li></ul></div>')
				imgDiv.appendTo(sectionItem);
				divDescription.appendTo(sectionItem);
				sectionItem.appendTo(divItem);
				list.appendTo(sectionItem);
				return listItem;
			});
			
			/*var resultHTML="";
			
			for(var i=0;i<data.info.length;i++){
				resultHTML+="<div class=RestaurantItem>";
				resultHTML+="<section id="+data.info[i].id+"><a href=index.php?page=rest&id="+data.info[i].id+">"+data.info[i].name +"</a><ul class=restList><li><span>Classificação Média: </span>"+data.info[i].total/data.info[i].votes+"<img src=images/restaurant/star.png width=30></></li><li><span>Localização: </span>"+data.info[i].location+"</li></ul></section>" ;
				resultHTML+="</div>";
			}*/
			$('#restsList').html(resultHTML);
			var numberResults="Foram encontrados "+ data.info.length + " resultados";
			$('#results').append(numberResults);
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

function pagination(itemsArray){
	var nrPages = Math.ceil(itemsArray.length/10);
}


