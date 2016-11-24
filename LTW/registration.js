$(function (){
  $("#submit").on('click' , function(){
    var name=$('#name').val();
	var username=$('#username').val();
    var age=$('#age').val();
    var email=$('#email').val();
    var password=$('#password').val();
	
    if (name == "" ||username==""|| age == null||email=="" || password == "")
      alert("All fields must be filled for registration");
    else if (age<18) {
      alert('You must be 18 or older to register');
    }
    else {
    var userData =
    {
      'name':name,
	  'username':username,
      'age':age,
      'email':email,
      'password':password
    }
    $.ajax({
		type: "POST",
		url: "userRegistration.php",
		async: false,
		dataType: "text",
		data: userData
		}).done(function(data) {
		document.location.href='index.php?page=login',true;
		}).fail(function(e) {
		console.log(e);
	});

  }
  });

  $("#cancel").on('click' , function(){
    alert('cancelei');
  });
});