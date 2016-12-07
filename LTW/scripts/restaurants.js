$(function (){
	
	$('#Selector-content').on('change',function(){
		var locationRest = $("#locationSearch").val();
		var cuisine = $("#cuisineSearch").val();
		console.log(locationRest);
		console.log(cuisine);
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
				
				var resultHTML="";
				for(var i=0;i<data.info.length;i++){
				resultHTML+="<div class=RestaurantItem>";
				resultHTML+="<p><a href=index.php?page=rest"+"&id="+data.info[i].id+">"+data.info[i].name +"</a></p><p>"+data.info[i].total/data.info[i].votes+"<img src=images/restaurant/star.png width=30></>" ;
				resultHTML+="</div>";
				}
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
				
				var resultHTML="";
				resultHTML+="<div class=RestaurantItem>";
				resultHTML+="<p><a href=index.php?page=rest"+"&id="+data.info[0].id+">"+data.info[0].name +"</a></p><p>"+data.info[0].total/data.info[0].votes+"<img src=images/restaurant/star.png width=30></>" ;
				resultHTML+="</div>";
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
			
			var resultHTML="";
			
			for(var i=0;i<data.info.length;i++){
				resultHTML+="<div class=RestaurantItem>";
				resultHTML+="<p><a href=index.php?page=rest"+"&id="+data.info[i].id+">"+data.info[i].name +"</a></p><p>"+data.info[i].total/data.info[i].votes+"<img src=images/restaurant/star.png width=30></>" ;
				resultHTML+="</div>";
			}
			$('#restsList').append(resultHTML);
			var numberResults="Foram encontrados "+ i + " resultados";
			$('#results').append(numberResults);
		 }
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		 
		}).fail(function(e) {
		console.log(e);
	});
});
});



