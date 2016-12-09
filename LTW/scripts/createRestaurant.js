$(function (){
  // $('#upload').on('click',function(){
	 //  console.log('oi');
	 // $('#myFile').upload('xhr2.php',function(success){
	 // console.log('done');},$('#prog'));
	 // console.log($('#myFile'));
	 // var tmppath = URL.createObjectURL($('#myFile')[0].files[0]);
	 // console.log(tmppath);
	 // var imageUp= "<img alt=oi src="+tmppath+">";
	 // $('#imageUp').append(imageUp);
	 // });
	

  $("#submit").on('click' , function(){
console.log('oi');
	var name=$('#name').val();
    var locationRes=$('#location').val();
	var type=$('#type').val();
    var description=$('#description').val();
	var openS=$('#openS').val();
    var closeS=$('#closeS').val();
	var openFS=$('#openFS').val();
    var closeFS=$('#closeFS').val();
	var price=$('#price').val();	
	
    if (name==""||locationRes == ""||type == ""||openS == ""||closeS == ""||openFS == ""||closeFS == ""||price == "")
      alert("All fields must be filled for registration");
    else {
	if(description==null)
		description="";
    var userData =
    {
	  'dicionario':'createRestaurant',
	  'name':name,
      'locationRes':locationRes,
	  'type':type,
      'openS':openS,
	  'closeS':closeS,
      'openFS':openFS,
	  'closeFS':closeFS,
      'price':price,
	  'description':description
    }
    $.ajax({
		type: "POST",
		url: "restController.php",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(userData)
		}).done(function(data) {
			console.log(data);
		 if(data.status == 'success'){
			alert('Restaurant successfully created!');		
		 }
		 else if(data.status == 'notLogged'){
			 alert('You need to log in to create a restaurant');
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

$.fn.upload = function(remote, data, successFn, progressFn) {
	
	// if we dont have post data, move it along
	if (typeof data != "object") {
		progressFn = successFn;
		successFn = data;
	}

	var formData = new FormData();

	var numFiles = 0;
	this.each(function() {
		var i, length = this.files.length;
		numFiles += length;
		for (i = 0; i < length; i++) {
			formData.append(this.name, this.files[i]);
		}
	});

	// if we have post data too
	if (typeof data == "object") {
		for (var i in data) {
			formData.append(i, data[i]);
		}
	}


	var def = new $.Deferred();
	if (numFiles > 0) {
		// do the ajax request
		$.ajax({
			url: remote,
			type: "POST",
			xhr: function() {
				myXhr = $.ajaxSettings.xhr();
				if(myXhr.upload && progressFn){
					myXhr.upload.addEventListener("progress", function(prog) {
						var value = ~~((prog.loaded / prog.total) * 100);

						// if we passed a progress function
						if (typeof progressFn === "function") {
							progressFn(prog, value);

						// if we passed a progress element
						} else if (progressFn) {
							$(progressFn).val(value);
						}
					}, false);
				}
				return myXhr;
			},
			data: formData,
			dataType: "json",
			cache: false,
			contentType: false,
			processData: false,
			complete: function(res) {
				console.log(res);
				var json;
				try {
					json = JSON.parse(res.responseText);
				} catch(e) {
					json = res.responseText;
				}
				if (typeof successFn === "function") successFn(json);
				def.resolve(json);
			}
		});
	} else {
		def.reject();
	}

	return def.promise();
};

function uploadFile(){
	var file = $('#fileToUpload')[0].files[0];
	var formdata = new FormData();
	formdata.append("fileToUpload", file);
	console.log(formdata);
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "upload.php");
	ajax.send(formdata);
}