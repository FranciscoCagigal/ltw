$(function (){
		
	//load da pagina
	/*$('load',function(){
		
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
			 
			var pages=pagination(data.info,sizePerPage);
			var pageSet;
			if((pageSet=document.location.href.split('offset=')[1])==null || pageSet>data.info.length){
				pageSet=1;
			}
			
			var pageDisplayed= data.info.slice((pageSet-1)*sizePerPage, (pageSet-1)*sizePerPage+sizePerPage);				
			
			var resultHTML = $.map(pageDisplayed,function(item,index){
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
	
});*/
	$('#editBtn').on('click',function(){
		$('#name').removeAttr('disabled');
		$('#age').removeAttr('disabled');
		$('#email').removeAttr('disabled');
		$('#editBtn').prop('hidden',true);
		$('#saveEdit').prop('hidden',false);
	});
	
	$('#saveEdit').on('click',function(){
		//TODO: SAVE ALTERATIONS
	});
});