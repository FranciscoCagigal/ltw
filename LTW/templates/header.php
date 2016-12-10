<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	
	<!-- Title Of Site -->
	<title>Just food.</title>
	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="scripts/logout.js" type="text/javascript"></script>

	<!-- CSS Custom -->
	<link href="css/style.css" rel="stylesheet">

</head>
<body class="home">

	<div id="introLoader" class="introLoading"></div>
	
	<!-- start Container Wrapper -->
	<div class="container-wrapper">

		<!-- start Header -->
		<header id="header">
			<!-- start Navbar (Header) -->
			<nav class="navbar">

				<div class="container">

					<div class="logo-wrapper">
						<div class="logo">
							<a href="index.html"><img src="images/restaurant/logo.png" alt="Logo" width="150" /></a>
						</div>
					</div>

					<div id="navbar" class="navbar-nav-wrapper navbar-arrow">

						<ul class="nav navbar-nav" id="responsive-menu">

							<li>
								<a href="?page=home">Home</a>
							</li>

							<li>
								<a href="?page=rests">Restaurantes</a>
							</li>

		
							<li class="user-list">
								<a href="#">Utilizador</a>
								<ul class="dropdownuser">
									<li><a href="user-profile.html">Perfil do utilizador</a></li>
									<li><a href="user-profile-update.html">Atualizar perfil</a></li>
									<li><a href="user-favourite-restaurant.html">Restaurante favorito</a></li>
									<li><a href="user-change-pass.html">Alterar Password</a></li>
								</ul>
							</li>
		

							<li class="restaurant-list">
								<a href="#">Restaurante</a>
								<ul class="dropdownrestaurant">
									<li><a href="?page=restaurantCreation">Adicionar restaurante</a></li>
									<li class="manageRest"><a href="#">Gerir restaurante</a>
										<ul class="dropdownManager" id="dropdownManager">
											
										</ul>
									</li>
								</ul>
							</li>

							<li class="aboutus-list"><a href="?page=aboutUs#aboutUs">Sobrenos</a></li>
							<li class="contacts-list"><a href="?page=aboutUs#contactUs">Contactos</a></li>
						</ul>

					</div>

					<div class="nav-mini-wrapper">
						<ul class="nav-mini sign-in">
							<li><a href="?page=login">login</a></li>
							<li><a href="?page=registration">register</a></li>
							<li><a href="#!" id="logout" hidden>logout</a></li>
						</ul>
					</div>

				</div>

			</nav>
			<!-- end Navbar (Header) -->
		</header>
		<!-- end Header -->