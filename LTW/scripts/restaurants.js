$(function (){
  
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