$(function (){
  $('load',function(){
	  var restsData =
    {
	  'dicionario':'ratingTop5'
    }
	$.ajax({
		type: "POST",
		url: "restController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(restsData)
		}).done(function(data) {
		 if(data.status == 'success'){
			 var resultHTML = $.map(data.info,function(item,index){
					var listItem = $('<li></li>');
					var imgDiv = $('<figure class=restLogo><img src='+item.imgSrc+' width=100px height=80px;/></figure>');
					var divDescription = $('<div class=descriptionRest><a href = ?page=rest&id='+item.id+'>'+item.name+'</a></div>');
					var description = $('<p>'+item.description+'</p>');
					description.appendTo(divDescription);
					var divItem = $('<div class=restaurantItem></div>');
					divItem.appendTo(listItem);
					var sectionItem = $('<section id=' + item.id + '></section>');
					var average;
					if(item.votes==0)
						average=0;
					else average=item.total/item.votes;
					var list =$('<div class=attributes><ul class=restList><li><span>Classificação Média: </span>'+average+"<img src=images/restaurant/star.png width=20></></li><li><span>Localização: </span>"+item.location+'</li><li><span>Cozinha: </span>'+item.tipo+'</li><li><span>Preço médio: </span>'+item.price+'€</li></ul></div>')
					imgDiv.appendTo(sectionItem);
					divDescription.appendTo(sectionItem);
					sectionItem.appendTo(divItem);
					list.appendTo(sectionItem);
					return listItem;
				});
			
			
			//$('.rating5-wrapper').find('#rating5-container').html(resultHTML);
			$('#comment5-container,#rating5-container').html(resultHTML);
			
			
		 }else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		 
		}).fail(function(e) {
		console.log(e);
	});
  });
});