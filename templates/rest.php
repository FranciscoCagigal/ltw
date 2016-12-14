<div id="fundo">
	<script src="scripts/restaurant.js" type="text/javascript"></script>
  <link rel="stylesheet" type="text/css" media="all" href="css/jquery.lightbox-0.5.css">
  <script type="text/javascript" src="js/jquery.lightbox-0.5.min.js"></script>
	
	<div class="main-wrapper">
		<div class='restaurant-wrapper'>
			<div class='restaurant-content'>
				<?php
				if(isset($_GET['id'])){
					echo "<section id=rest$_GET[id] class=restaurant>";
					echo "</section>";
				}
				?>
				<div class="favourite">
					<button id='favourite' type='button'>Marcar como favorito</button>
				</div>
			</div>
		</div>
		<div class='rating-container'>
					<div class="rating">
						<span><input type="radio" name="rating" id="star5" value="5"><label for="star5"><img src="images/restaurant/emptyStar.png" width="25" height="25" alt="Very Good" /></label></span>
						<span><input type="radio" name="rating" id="star4" value="4"><label for="star4"><img src="images/restaurant/emptyStar.png" width="25" height="25" alt="Good" /></label></span>
						<span><input type="radio" name="rating" id="star3" value="3"><label for="star3"><img src="images/restaurant/emptyStar.png" width="25" height="25" alt="Meh" /></label></span>
						<span><input type="radio" name="rating" id="star2" value="2"><label for="star2"><img src="images/restaurant/emptyStar.png" width="25" height="25" alt="Bad" /></label></span>
						<span><input type="radio" name="rating" id="star1" value="1"><label for="star1"><img src="images/restaurant/emptyStar.png" width="25" height="25" alt="Very Bad" /></label></span>
					</div>
		</div>
		<div class="galleryInline">
			<div class="gallery-wrapper">
			<div class="gallery-content">
			  <div id="thumbnails">
				<ul class="clearfix">
				
				  <li><a href="images/photos/01-turntable-illustration-graphic.png" title="Turntable by Jens Kappelmann"><img src="images/photos/01-turntable-illustration-graphic-thumbnail.png" alt="turntable"></a></li>
				  <li><a href="images/photos/02-robot-diy-kit.png" title="DIY Robot by Jory Raphael"><img src="images/photos/02-robot-diy-kit-thumbnail.png" alt="DIY Robot Kit"></a></li>
				  <li><a href="images/photos/03-todly-green-monster.png" title="Todly by Scott Wetterschneider"><img src="images/photos/03-todly-green-monster-thumbnail.png" alt="Todly"></a></li>
				  <li><a href="images/photos/04-loz-tea-party.png" title="LoZ Tea Party by Joseph Le"><img src="images/photos/04-loz-tea-party-thumbnail.png" alt="legend of zelda tea party"></a></li>
				  <li><a href="images/photos/10-big-restaurant.png" title="Klaxon Icon by John Khester"><img src="images/photos/10-big-restaurant-thumbnail.png" alt="airhorn icon"></a></li>
				  <li><input type="file" id="photoToUpload"/></li>
				  <li><button id="uploadPhoto">Upload</button></li>
				</ul>
			  </div>
			</div>
		  </div>
		<div class="division">
			<div class="mapContainer">
				<div id="mapShow" style="width:350px;height:350px"></div>
			</div>								     
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3P9Cgptza2YfyJeFuuun4a8I3Kcz4B34"></script>
		<section id="comments">
		<div class="comments-wrapper">
			<div class="comments-container">
				<ul id="appendCommentsHere">
				<li><span   id="userComment" contenteditable="true" placeholder="Escreve aqui"></span></li>
				</div>
			</div>
		</section>
		</div>
		
		  </div>
		<div class="pagination-wrapper">
		
			<div class="pagination-content">
			
				<div class="pagination">
					
					<ul id="pagination" class="pager-list">		
					</ul>	
					
				</div>
					
				</div>
			
		</div>
  
  
<script type="text/javascript">
$(function() {
    $('#thumbnails a').lightBox();
});
</script>
		</div>
	</div>
</div>