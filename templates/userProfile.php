<script src="scripts/editProfile.js" type="text/javascript"></script>

<div id	="fundo">
<!-- start Main Wrapper -->
<div class="main-wrapper">

<div class="profile-wrapper">

	<div class="profile-container">
		<form>
				<div class="profile">
					<span ><b>Perfil do utilizador</b></span>
					<div class="inline-perfil">
						<div class="inputs-perfil">
							<div>
								<span><label><b>Name</b></label>
								<input type="text" id="name" value="" disabled /></span><br>
								<span><label><b>Age</b></label>
								<input type="text" id="age" value="" disabled /></span><br>
								<span><label><b>Email</b></label>
								<input type="text" id="email" value="" disabled /></span>
							</div>
							<div class="inline-perfil">
								<input type="file" hidden id="imgToUpload"/>
								<div id="appendImgHere" class="image-perfil">
								</div>
							</div>
						</div>
						<div class="editButton">
								<button id="editBtn" type="button" hidden>Editar</button>
								<button id="saveEdit" type="button" hidden>Guardar Alterações</button>
						</div>
					</div>
					
				</div>
		
		</form>

	</div>

</div>
<hr>
<div class="password-wrapper">

	<div class="password-container">
		<form>
				<div id="password" class="password changePasswordDiv" hidden>
					<span ><b>Mudança de Palavra-Passe</b></span>
					<div class="inputs-password">
						<div>
							<span><label><b>Antiga palavra-passe</b></label>
							<input type="password" id="oldPass"/></span><br>
							<span><label><b>Nova palavra-passe</b></label>
							<input type="password" id="newPass"/></span><br>
						</div>
					
					</div>
					<div class="editButton">
							<button id="changePass" type="reset">Alterar</button>
					</div>
				</div>
		
		</form>

	</div>

</div>

</div>
</div>
