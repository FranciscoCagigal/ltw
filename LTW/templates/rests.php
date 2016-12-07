<div id="fundo">
<script src="scripts/restaurants.js" type="text/javascript"></script>

<!-- start Main Wrapper -->
<div class="main-wrapper">

<div class="search-restaurant-wrapper">

	<div class="container">
	
		<form>
		
			<div class="search-restaurant-button">
				<span ><b>Procure um restaurante</b></span>
				<div class="search-restaurant">
					<div>
						<input type="text" id="restName" placeholder="Nome do restaurante" />
					</div>
				
				</div>
				<div class="searchButton">
						<button  type="button" id="searchButton">Procurar</button>
				</div>
			</div>
		
		</form>

	</div>

</div>

<div class="section sm">

	<div class="container">
	
		<div class="sorting-wrappper">
			<hr>
			<div class="Selector-content" id="Selector-content">		

								<div class="localizationSelector Selector">
									<label>Localização</label>
									<select id="locationSearch" class="selectpicker" >
										<option value="Todos">Todos</option>
										<option value="Lisboa">Lisboa</option>
										<option value="Porto">Porto</option>
										<option value="Coimbra">Coimbra</option>
										<option value="Braga">Braga</option>
										<option value="Vila Real">Vila Real</option>
										<option value="Viseu">Viseu</option>
									</select>
								</div>
								<div class="CuisineSelector Selector">
									<label>Tipo de cozinha</label>
									<select id="cuisineSearch"  class="selectpicker">
										<option value="Todos">Todos</option>
										<option value="Hamburger">Hamburger</option>
										<option value="Frango">Frango</option>
										<option value="Chinesa">Chinesa</option>
										<option value="Fast Food">Fast Food</option>
										<option value="Grill">Grill</option>
										<option value="Indiana">Indiana</option>
										<option value="Italiana">Italiana</option>
									</select>
								</div>

		</div>
		<div class="results">
				<p id="results"></p>
			</div>
		
		<hr>
		
		<div id="restsList">

		</div>
		
		<hr>
		
		<div class="restaurant-wrapper">
		
			<div class="row">
			
				<div class="col-sm-8 col-md-9 mt-25">
				
					<div class="restaurant-list-wrapper">
										
					<div class="pager-wrapper">
					
						<ul class="pager-list">
							<li class="paging-nav"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
							<li class="paging-nav"><a href="#"><i class="fa fa-angle-left"></i></a></li>
							<li class="number">
								<span class="mr-5"><span class="font600">page</span></span>
							</li>
							<li class="form">
								<form>
									<input type="text" value="1" class="form-control"> 
								</form>
							</li>
							<li class="number">
								<span class="mr-5">/</span> <span class="font600">79</span>
							</li>
							<li class="paging-nav"><a href="#">go</a></li>
							<li class="paging-nav"><a href="#"><i class="fa fa-angle-right"></i></a></li>
							<li class="paging-nav"><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
						</ul>	
					
					</div>
					
				</div>
			
			</div>
			
		</div>

	</div>

</div>
</div>