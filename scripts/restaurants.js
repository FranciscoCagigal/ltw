$(function (){
	var sizePerPage =5;
	
	$('#restName').on('keydown', function(e) {
		if (e.which == 13 || e.keyCode==13) {
			$('#searchButton').click();
			e.preventDefault();
		}
	});	
	
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
				
				//limpar
				var myNode = document.getElementById("restsList");
				while (myNode.firstChild) {
					myNode.removeChild(myNode.firstChild);
				}
				myNode = document.getElementById("results");
				while (myNode.firstChild) {
					myNode.removeChild(myNode.firstChild);
				}
				myNode = document.getElementById("pagination");
				while (myNode.firstChild) {
					myNode.removeChild(myNode.firstChild);
				}
				
				
			 if(data.status == 'success'){
				 
				
				var pages=pagination(data.info,sizePerPage);
				var pageSet;
				if((pageSet=document.location.href.split('offset=')[1])==null || pageSet>data.info.length){
					pageSet=1;
				}
				
				var pageDisplayed= data.info.slice((pageSet-1)*sizePerPage, (pageSet-1)*sizePerPage+sizePerPage);	
				 
				 
				var resultHTML = $.map(pageDisplayed,function(item,index){
					var listItem = $('<li></li>');
					var imgDiv = $('<figure class=restLogo><img src='+escapeHtml(item.imgSrc)+' width=100px height=80px;/></figure>');
					var divDescription = $('<div class=descriptionRest><a href = index.php?page=rest&id='+escapeHtml(item.id)+'>'+escapeHtml(item.name)+'</a></div>');
					var description = $('<p>'+escapeHtml(item.description)+'</p>');
					description.appendTo(divDescription);
					var divItem = $('<div class=restaurantItem></div>');
					divItem.appendTo(listItem);
					var sectionItem = $('<section id=' + escapeHtml(item.id) + '></section>');
					var average;
					if(item.votes==0)
						average=0;
					else average=item.total/item.votes;
					var list =$('<div class=attributes><ul class=restList><li><span>Classificação Média: </span>'+escapeHtml(Math.round( average * 10) / 10)+"<img src=images/restaurant/star.png width=20></></li><li><span>Localização: </span>"+escapeHtml(item.location)+'</li><li><span>Cozinha: </span>'+escapeHtml(item.tipo)+'</li><li><span>Preço médio: </span>'+escapeHtml(item.price)+'€</li></ul></div>')
					imgDiv.appendTo(sectionItem);
					divDescription.appendTo(sectionItem);
					sectionItem.appendTo(divItem);
					list.appendTo(sectionItem);
					return listItem;
				});
				
				$('#pagination').append(pages);
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
				myNode = document.getElementById("pagination");
				while (myNode.firstChild) {
					myNode.removeChild(myNode.firstChild);
				}
				
				
			 if(data.status == 'success'){
				 
				var pages=pagination(data.info,sizePerPage);
				var pageSet;
				console.log(sizePerPage*pageSet);
				if((pageSet=document.location.href.split('offset=')[1])==null || pageSet>Math.ceil(data.info.length/sizePerPage)){
					pageSet=1;
				}
				
				var pageDisplayed= data.info.slice((pageSet-1)*sizePerPage, (pageSet-1)*sizePerPage+sizePerPage);				 
				 
			var resultHTML = $.map(pageDisplayed,function(item,index){
				var listItem = $('<li></li>');
				var imgDiv = $('<figure class=restLogo><img src='+escapeHtml(item.imgSrc)+' width=100px height=80px;/></figure>');
				var divDescription = $('<div class=descriptionRest><a href = index.php?page=rest&id='+escapeHtml(item.id)+'>'+escapeHtml(item.name)+'</a></div>');
				var description = $('<p>'+escapeHtml(item.description)+'</p>');
				description.appendTo(divDescription);
				var divItem = $('<div class=restaurantItem></div>');
				divItem.appendTo(listItem);
				var sectionItem = $('<section id=' + escapeHtml(item.id) + '></section>');
				var average;
				if(item.votes==0)
					average=0;
				else average=item.total/item.votes;
				var list =$('<div class=attributes><ul class=restList><li><span>Classificação Média: </span>'+escapeHtml(average)+"<img src=images/restaurant/star.png width=20></></li><li><span>Localização: </span>"+escapeHtml(item.location)+'</li><li><span>Cozinha: </span>'+escapeHtml(item.tipo)+'</li><li><span>Preço médio: </span>'+escapeHtml(item.price)+'€</li></ul></div>');
				imgDiv.appendTo(sectionItem);
				divDescription.appendTo(sectionItem);
				sectionItem.appendTo(divItem);
				list.appendTo(sectionItem);
				return listItem;
			});
				
				$('#pagination').append(pages);
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
			 
			var pages=pagination(data.info,sizePerPage);
			var pageSet;
			if((pageSet=document.location.href.split('offset=')[1])==null || pageSet>Math.ceil(data.info.length/sizePerPage)){
				pageSet=1;
			}
			
			var pageDisplayed= data.info.slice((pageSet-1)*sizePerPage, (pageSet-1)*sizePerPage+sizePerPage);				
			
			var resultHTML = $.map(pageDisplayed,function(item,index){
				var listItem = $('<li></li>');
				var imgDiv = $('<figure class=restLogo><img src='+escapeHtml(item.imgSrc)+' width=100px height=80px;/></figure>');
				var divDescription = $('<div class=descriptionRest><a href = index.php?page=rest&id='+escapeHtml(item.id)+'>'+escapeHtml(item.name)+'</a></div>');
				var description = $('<p>'+escapeHtml(item.description)+'</p>');
				description.appendTo(divDescription);
				var divItem = $('<div class=restaurantItem></div>');
				divItem.appendTo(listItem);
				var sectionItem = $('<section id=' + escapeHtml(item.id) + '></section>');
				var average;
				if(item.votes==0)
					average=0;
				else average=item.total/item.votes;
				var list =$('<div class=attributes><ul class=restList><li><span>Classificação Média: </span>'+escapeHtml(Math.round( average * 10) / 10)+"<img src=images/restaurant/star.png width=20></></li><li><span>Localização: </span>"+escapeHtml(item.location)+'</li><li><span>Cozinha: </span>'+escapeHtml(item.tipo)+'</li><li><span>Preço médio: </span>'+escapeHtml(item.price)+'€</li></ul></div>')
				imgDiv.appendTo(sectionItem);
				divDescription.appendTo(sectionItem);
				sectionItem.appendTo(divItem);
				list.appendTo(sectionItem);
				return listItem;
			});
			
			
			$('#pagination').append(pages);
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

function pagination(itemsArray,sizePerPage){
	var nrPages = Math.ceil(itemsArray.length/sizePerPage);
	var resultHTML="";
	var locationRest = $("#locationSearch").val();
		var cuisine = $("#cuisineSearch").val();
	for(var i=0;i<nrPages;i++){
		
		resultHTML+='<li><a href=?page=rests&location='+locationRest+'&cuisine='+cuisine+'&offset='+(i+1)+'>'+(i+1)+'</a></li>';
	}
	
	return resultHTML;
}

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