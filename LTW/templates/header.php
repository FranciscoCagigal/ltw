<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	
	<!-- Title Of Site -->
	<title>Just eat.</title>

	<!-- CSS  -->
	<link href="css/main.css" rel="stylesheet">

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
							<a href="index.html"><img src="images/logo.png" alt="Logo" /></a>
						</div>
					</div>

					<div id="navbar" class="navbar-nav-wrapper navbar-arrow">

						<ul class="nav navbar-nav" id="responsive-menu">

							<li>
								<a href="index.html">Home</a>
							</li>

							<li>
								<a href="restaurant.html">Restaurantes</a>
							</li>

							<li>
								<a href="#">Pagina</a>
								<ul>
									<li>
										<a href="user.html">Utilizador</a>
										<ul>
											<li><a href="user-profile.html">Perfil do utilizador</a></li>
											<li><a href="user-profile-update.html">Atualização do perfil</a></li>
											<li><a href="user-favourite-restaurant.html">Restaurante favorito</a></li>
											<li><a href="user-change-pass.html">Alterar password</a></li>
										</ul>
									</li>
									<li>
										<a href="#">Conta</a>
										<ul>
											<li><a href="login.html">Login</a></li>
											<li><a href="login.html">Registar</a></li>
											<li><a href="account-forgot-password-page.html">Esqueci-me da password</a></li>
										</ul>
									</li>

									<li>
										<a href="#">Restaurante</a>
										<ul>
											<li><a href="restaurant-owner-dashboard.html">Adicionar restaurante</a></li>
											<li><a href="restaurant-detail.html">Gerir restaurante</a></li>
										</ul>
									</li>

									<li><a href="about-us.html">Sobre nós</a></li>
									<li><a href="contact.html">Contactos</a></li>
								</ul>
							</li>

						</ul>

					</div>
					<!--/.nav-collapse -->

					<div class="nav-mini-wrapper">
						<ul class="nav-mini sign-in">
							<li><a href="?page=login">login</a></li>
							<li><a href="?page=registration">register</a></li>
							<li><a href="#!" id="logout">logout</a></li>
						</ul>
					</div>

				</div>

			</nav>
			<!-- end Navbar (Header) -->
		</header>
		<!-- end Header -->