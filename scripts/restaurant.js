$(function (){
	
	var sizePerPage =5;
	
	$('#userComment').on('keydown', function(e) {
		if (e.which == 13 || e.keyCode==13) {
			var idRest=($('.restaurant')[0].id).replace('rest','');
			var comment=$('#userComment').text();
			if(comment!= ""){
				var restData =
			{
			  'dicionario':'postComment',
			  'id': idRest,
			  'comment':comment
			}
			
			$.ajax({
			type: "POST",
			url: "userController.php",
			contentType: "application/json",
			dataType: "json",
			data: JSON.stringify(restData)
			}).done(function(data) {
				
			 if(data.status == 'success'){
				 window.location.reload()
			 }
			 else if(data.status == 'notLogged'){
				 alert('Precisa de ter a sessão iniciada para poder marcar como favorito');
				 document.location.href='index.php?page=login',true;
			 }
			 else if(data.status == 'serverIssues'){
				 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
			 }
			
			}).fail(function(e) {
			console.log(e);
			});
			}
			
			e.preventDefault();
		}
	});	
	
	$('.restaurant-content').on('click','#editRest',function(){
		$('.hiddenRestAttr').removeAttr('disabled');
		$('#saveRest').removeAttr('hidden');
		$('#editRest').prop('hidden',true);
	});
	
	$('.restaurant-content').on('click','#saveRest',function(){
		var idRest=($('.restaurant')[0].id).replace('rest','');
		var locationRest=$('#location').val();
		var type=$('#tipo').val();
		var price=$('#price').val();
		var openS=$('#openS').val();
		var closeS=$('#closeS').val();
		var openFS=$('#openFS').val();
		var closeFS=$('#closeFS').val();
		
		if(locationRest=="" || type=="" || price==""|| openS==""|| closeS==""|| openFS==""|| closeFS==""){
			alert('Todos os campos devem estar preenchidos');
		}else{
			var restData =
			{
			  'dicionario':'updateRest',
			  'id': idRest,
			  'location':locationRest,
			  'type':type,
			  'price':price,
			  'closeS':closeS,
			  'openFS':openFS,
			  'openS':openS,
			  'closeFS':closeFS
			}
			$.ajax({
			type: "POST",
			url: "restController.php",
			contentType: "application/json",
			dataType: "json",
			data: JSON.stringify(restData)
			}).done(function(data) {
				
			 if(data.status == 'success'){
				alert('Definições alteradas');
				$('.hiddenRestAttr').prop('disabled',true);
				$('#saveRest').prop('hidden',true);
				$('#editRest').prop('hidden',false);
			 }
			 else if(data.status == 'notLogged'){
				 alert('Precisa de ter a sessão iniciada para poder marcar como favorito');
				 document.location.href='index.php?page=login',true;
			 }
			 else if(data.status == 'serverIssues'){
				 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
			 }
			
			}).fail(function(e) {
			console.log(e);
		});
		}
		
	});
	
	$('#favourite').on('click',function(){
		var idRest=($('.restaurant')[0].id).replace('rest','');
		var restData =
		{
		  'dicionario':'markFav',
		  'id': idRest
		}
		$.ajax({
		type: "POST",
		url: "userController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(restData)
		}).done(function(data) {
			
		 if(data.status == 'success'){
			alert('Restaurante marcado como favorito');
		 }
		 else if(data.status == 'notLogged'){
			 alert('Precisa de ter a sessão iniciada para poder marcar como favorito');
			 document.location.href='index.php?page=login',true;
		 }
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		
		}).fail(function(e) {
		console.log(e);
	});
		
	});
	
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
			 
			 var resultHTML = $.map(data.info,function(item,index){
					var primaryDiv = $('<div class=restPrimary></div>');
					var imgDiv = $('<figure class=restImage><img src='+item.imgSrc+' width=200px height=210px;/></figure>');
					var divDescription = $('<div class=restDescription><a href = index.php?page=rest&id='+item.id+'>'+item.name+'</a></div>');
					var description = $('<p>'+item.description+'</p>');
					description.appendTo(divDescription);
					var average;
					if(item.votes==0)
						average=0;
					else average=item.total/item.votes;
					var list =$('<div class=restAttr><ul class=restList><li><span>Classificação Média: </span>'+average+"<img src=images/restaurant/star.png width=15></></li><li><span>Localização: </span><input class=hiddenRestAttr type=text id=location disabled value="+item.location+' /></li><li><span>Cozinha: </span><input class=hiddenRestAttr type=text disabled id=tipo value='+item.tipo+' /></li><li><span>Preço médio: </span><input type=number class=hiddenRestAttr disabled id=price value='+item.price+' /></li><li><span>Horário semanal: </span><br>das <input type=time id=openS disabled class=hiddenRestAttr value='+item.openS +' /> às <input type=time id=closeS disabled class=hiddenRestAttr value='+item.closeS+' /></li><li><span>Horário fim de semana: </span><br>das <input type=time class=hiddenRestAttr id=openFS disabled value='+item.openFS +' \> às <input type=time id=closeFS disabled class=hiddenRestAttr value='+item.closeFS+' /></li><li class=editBtn><button  id=editRest type=button hidden>Editar</button></li><li class=editBtn><button  id=saveRest type=button hidden>Guardar</button></li></ul></div>')
					imgDiv.appendTo(primaryDiv);
					divDescription.appendTo(primaryDiv);
					list.appendTo(primaryDiv);
					return primaryDiv;
				});
				
				 var albumHTML="";
				 
				 for(var i=0;i<data.album.length;i++){
					 albumHTML+='<li><a href='+data.album[i].imgSrc+' title="by user: '+data.album[i].username+'"><img src='+data.album[i].imgSrc+'></a></li>';
				 }
				
				$('#prependAlbumHere').prepend(albumHTML);
				
				var pages=pagination(data.comment,sizePerPage);
				var pageSet;
				if((pageSet=document.location.href.split('offset=')[1])==null || pageSet>data.comment.length){
					pageSet=1;
				}
				
				var pageDisplayed= data.comment.slice((pageSet-1)*sizePerPage, (pageSet-1)*sizePerPage+sizePerPage);	
				
				var commentsHTML = $.map(pageDisplayed,function(item,index){
					var input = $('<li  class=comment>'+item.username+': '+item.userComment+'</li>');
					return input;
				});
				
				$('#pagination').append(pages);
				$('#appendCommentsHere').prepend(commentsHTML);
			var mapCanvas = document.getElementById("mapShow");
			  var mapOptions = {
				center: new google.maps.LatLng(data.info[0].lat, data.info[0].lng),
				zoom: 14
			  }
			  var map = new google.maps.Map(mapCanvas, mapOptions);
			  var marker = new google.maps.Marker();
			marker.setPosition(new google.maps.LatLng(data.info[0].lat, data.info[0].lng));
				marker.setMap(map);
			$('#rest'+idRest).append(resultHTML);
			if(data.myPage){
				$('#editRest').removeAttr('hidden');
			}


			$('#thumbnails a').lightBox();


			
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
			alert('You have successfully voted!');
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
  
  $('#uploadPhoto').on('click',function(){
	  var imgSrc;
	  console.log($('#photoToUpload')[0].files);
	  if($('#photoToUpload')[0].files.length>0){


			var imageSrc;
			uploadFile('images/photos/',$('#photoToUpload')[0].files[0],function(imageSrc){
			imgSrc=imageSrc;});
	  }
		
		var idRest=($('.restaurant')[0].id).replace('rest','');
		
	setTimeout(function(){
		console.log(imgSrc);
		var restData =
    {
	  'dicionario':'postPhoto',
	  'imgSrc':imgSrc,
	  'restaurant':idRest
    }
    $.ajax({
		type: "POST",
		url: "userController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(restData)
		}).done(function(data) {
			
		 if(data.status == 'success'){
			 window.location.reload();
		 }
		 else if(data.status == 'notLogged'){
			 alert('You must be logged in to vote!');
		 }
		 else if(data.status == 'serverIssues'){
			 alert('OOPS! It appears there is a problem with the server. We are trying to solve the issue as soon as possible');
		 }
		
		}).fail(function(e) {
		console.log(e);
	});},500);
		
		
  });
  
});

function pagination(itemsArray,sizePerPage){
	var nrPages = Math.ceil(itemsArray.length/sizePerPage);
	var idRest=($('.restaurant')[0].id).replace('rest','');
	var resultHTML="";
	for(var i=0;i<nrPages;i++){
		resultHTML+='<li><a href=?page=rest&id='+idRest+'&offset='+(i+1)+'>'+(i+1)+'</a></li>';
	}
	
	return resultHTML;
}

function uploadFile(path,file,returnValue){
	
	var formdata = new FormData();
	formdata.append("fileToUpload", file);
	formdata.append("path",path);
	$.ajax({
		type: 'post',
        url: 'upload.php',
        cache: false,
       	contentType: false,
       	processData: false,
		async:false,
        data: formdata,
        success: function (data) {
        	if(data.status == 'success'){
        		//image.value = data.name;
				returnValue(data.name);
        	}
    }
	});
}