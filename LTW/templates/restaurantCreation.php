<div id="fundo">
<script src="scripts/createRestaurant.js" type="text/javascript"></script>

<!-- start Main Wrapper -->
<div class="main-wrapper">

<div class="create-restaurant-wrapper">

	<div class="container">
	
		<form method="post" enctype="multipart/form-data">
			<fieldset>
				<legend>Informações do restaurante:</legend>

				<div class="restaurantInputs">
					<label><b>Nome</b></label><br>
					<input type="text" id='name' placeholder="Nome do restaurante" /><br>
					<label><b>Localização</b></label>
					<div class="localizationSelector Selector">
						<select class="selectpicker" id='location'>
								<option value="Lisboa">Lisboa</option>
								<option value="Porto">Porto</option>
								<option value="Coimbra">Coimbra</option>
								<option value="Braga">Braga</option>
								<option value="Vila Real">Vila Real</option>
								<option value="Viseu">Viseu</option>
						</select>
					</div>
					<label><b>Tipo de cozinha</b></label>
					<div class="CuisineSelector Selector">
						<select class="selectpicker" id='type'>
							<option value="Hamburger">Hamburger</option>
							<option value="Frango">Frango</option>
							<option value="Chinesa">Chinesa</option>
							<option value="Fast Food">Fast Food</option>
							<option value="Grill">Grill</option>
							<option value="Indiana">Indiana</option>
							<option value="Italiana">Italiana</option>
						</select>
					</div>
					<label><b>Descrição</b></label><br>
					<textarea type="text" id='description' rows="4" cols="50"> </textarea><br>
					<label><b>Horário Semana</b></label><br>
					<input type="time" id='openS'/> às <input type="time" id='closeS' /><br>
					<label><b>Horário Fim de Semana</b></label><br>
					<input type="time" id='openFS' /> às <input type="time" id='closeFS' /><br>
					<label><b>Média de preços</b></label><br>
					<input type="number" placeholder="Preço praticado"  id='price'/><br>
					
				    <p>Selecione imagem do restaurante:</p>
				    <input type="file" name="fileToUpload" id="fileToUpload">
				    <input type="button" value="Upload Image" onclick="uploadFile()" >
					<div id="imageUp">
					</div>
				</div>
			</fieldset>
			
			<button id='submit' type='button'>Criar</button> <br>
		
		</form>

	</div>

</div>
</div>
</div>