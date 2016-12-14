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
					var imgDiv = $('<figure class=restLogo><img src='+escapeHtml(item.imgSrc)+' width=100px height=80px;/></figure>');
					var divDescription = $('<div class=descriptionRest><a href = ?page=rest&id='+escapeHtml(item.id)+'>'+escapeHtml(item.name)+'</a></div>');
					var description = $('<p>'+escapeHtml(item.description)+'</p>');
					description.appendTo(divDescription);
					var divItem = $('<div class=restaurantItem></div>');
					divItem.appendTo(listItem);
					var sectionItem = $('<section id=' + escapeHtml(item.id) + '></section>');
					var average;
					if(item.votes==0)
						average=0;
					else average=item.total/item.votes;
					var list =$('<div class=attributes><ul class=restList><li><span>Classificação Média: </span>'+escapeHtml(average)+"<img src=images/restaurant/star.png width=20></></li><li><span>Localização: </span>"+escapeHtml(item.location)+'</li><li><span>Cozinha: </span>'+escapeHtml(item.tipo)+'</li><li><span>Preço médio: </span>'+escapeHtml(item.price)+'€</li></ul></div>')
					imgDiv.appendTo(sectionItem);
					divDescription.appendTo(sectionItem);
					sectionItem.appendTo(divItem);
					list.appendTo(sectionItem);
					return listItem;
				});
				
				var commentHTML = $.map(data.comment,function(item,index){
					var listItem = $('<li></li>');
					var imgDiv = $('<figure class=restLogo><img src='+escapeHtml(item.imgSrc)+' width=100px height=80px;/></figure>');
					var divDescription = $('<div class=descriptionRest><a href = ?page=rest&id='+escapeHtml(item.restaurant)+'>'+escapeHtml(item.name)+'</a></div>');
					var description = $('<p>'+escapeHtml(item.description)+'</p>');
					description.appendTo(divDescription);
					var divItem = $('<div class=restaurantItem></div>');
					divItem.appendTo(listItem);
					var sectionItem = $('<section id=' + escapeHtml(item.id) + '></section>');
					var average;
					if(item.votes==0)
						average=0;
					else average=item.total/item.votes;
					var list =$('<div class=attributes><ul class=restList><li><span>Classificação Média: </span>'+escapeHtml(average)+"<img src=images/restaurant/star.png width=20></></li><li><span>Localização: </span>"+escapeHtml(item.location)+'</li><li><span>Cozinha: </span>'+escapeHtml(item.tipo)+'</li><li><span>Preço médio: </span>'+escapeHtml(item.price)+'€</li></ul></div>')
					imgDiv.appendTo(sectionItem);
					divDescription.appendTo(sectionItem);
					sectionItem.appendTo(divItem);
					list.appendTo(sectionItem);
					return listItem;
				});
			
		
			
			$('#rating5-container').append(resultHTML);
			$('#comment5-container').append(commentHTML);
			
			
		 }else if(data.status == 'serverIssues'){
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