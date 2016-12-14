<div id="fundo">
<script src="scripts/restaurants.js" type="text/javascript"></script>
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
						<button  type="button" id="searchButton" >Procurar</button>
				</div>
			</div>
		
		</form>

	</div>

</div>



	<div class="container">
	
		<div class="sorting-wrappper">
			<hr>
			<div class="Selector-content" id="Selector-content">		

								<div class="localizationSelector Selector">
									<label>Localização</label>
									<select id="locationSearch" class="selectpicker" >
										<?php 
											if(isset($_GET['location'])&&in_array($_GET['location'],array('Todos','Lisboa','Porto','Coimbra','Braga','Vila Real','Viseu'))){
												echo "<option value=$_GET[location] selected>$_GET[location]</option>";
												if($_GET['location']!='Todos')
													echo "<option value=Todos>Todos</option>";
												if($_GET['location']!='Lisboa')
													echo "<option value=Lisboa>Lisboa</option>";
												if($_GET['location']!='Porto')
													echo "<option value=Porto>Porto</option>";
												if($_GET['location']!='Coimbra')
													echo "<option value=Coimbra>Coimbra</option>";
												if($_GET['location']!='Braga')
													echo "<option value=Braga>Braga</option>";
												if($_GET['location']!='Vila Real')
													echo '<option value="Vila Real">Vila Real</option>';
												if($_GET['location']!='Viseu')
													echo "<option value=Viseu>Viseu</option>";
											}
											else{
											echo "<option value=Todos>Todos</option>";
											echo "<option value=Lisboa>Lisboa</option>";
											echo "<option value=Porto>Porto</option>";
											echo "<option value=Coimbra>Coimbra</option>";
											echo "<option value=Braga>Braga</option>";
											echo '<option value="Vila Real">Vila Real</option>';
											echo "<option value=Viseu>Viseu</option>";
											}
										
										?>
										
									</select>
								</div>
								<div class="CuisineSelector Selector">
									<label>Tipo de cozinha</label>
									<select id="cuisineSearch"  class="selectpicker">
									<?php
										if(isset($_GET['cuisine'])&&in_array($_GET['cuisine'],array('Todos','Hamburger','Frango','Chinesa','Fast Food','Grill','Indiana','Italiana'))){
											echo "<option value=$_GET[cuisine] selected>$_GET[cuisine]</option>";
											if($_GET['cuisine']!='Todos')
													echo "<option value=Todos>Todos</option>";
												if($_GET['cuisine']!='Hamburger')
													echo "<option value=Hamburger>Hamburger</option>";
												if($_GET['cuisine']!='Frango')
													echo "<option value=Frango>Frango</option>";
												if($_GET['cuisine']!='Chinesa')
													echo "<option value=Chinesa>Chinesa</option>";
												if($_GET['cuisine']!='Fast Food')
													echo '<option value="Fast Food">Fast Food</option>';
												if($_GET['cuisine']!='Grill')
													echo "<option value=Grill>Grill</option>";
												if($_GET['cuisine']!='Indiana')
													echo "<option value=Indiana>Indiana</option>";
												if($_GET['cuisine']!='Italiana')
													echo "<option value=Italiana>Italiana</option>";
										}
										else{
											echo "<option value=Todos>Todos</option>";
											echo "<option value=Hamburger>Hamburger</option>";
											echo "<option value=Frango>Frango</option>";
											echo "<option value=Chinesa>Chinesa</option>";
											echo '<option value="Fast Food">Fast Food</option>';
											echo "<option value=Grill>Grill</option>";
											echo "<option value=Indiana>Indiana</option>";
											echo "<option value=Italiana>Italiana</option>";
										}
									?>
									</select>
								</div>

		</div>
		</div>
		<div class="results">
				<p id="results"></p>
			</div>
		
		<hr>
		<div class="restsContainer">
			<div class="restsList">
				<ul id="restsList">
				</ul>
			</div>
		</div>
		
		<hr>
		
		<div class="pagination-wrapper">
		
			<div class="pagination-content">
			
				<div class="pagination">
					
					<ul id="pagination" class="pager-list">		
					</ul>	
					
				</div>
					
				</div>
			
		</div>
			

	</div>
</div>
</div>