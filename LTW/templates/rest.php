<script src="scripts/restaurant.js" type="text/javascript"></script>
<div id = "dialog" title = "" style="visibility: hidden;"></div>

<style>
         .ui-widget-header,.ui-state-default, ui-button {
            background:#b9cd6d;
            border: 1px solid #b9cd6d;
            color: #FFFFFF;
            font-weight: bold;
         }
      </style>
<?php
if(isset($_GET['id'])){
	echo "<div id=rest$_GET[id] class=restaurant>";
}
?>

<div class="rating">
    <span><input type="radio" name="rating" id="star5" value="5"><label for="star5"><img src="images/restaurant/emptyStar.png" width="30" alt="Very Good" /></label></span>
    <span><input type="radio" name="rating" id="star4" value="4"><label for="star4"><img src="images/restaurant/emptyStar.png" width="30" alt="Good" /></label></span>
    <span><input type="radio" name="rating" id="star3" value="3"><label for="star3"><img src="images/restaurant/emptyStar.png" width="30" alt="Meh" /></label></span>
    <span><input type="radio" name="rating" id="star2" value="2"><label for="star2"><img src="images/restaurant/emptyStar.png" width="30" alt="Bad" /></label></span>
    <span><input type="radio" name="rating" id="star1" value="1"><label for="star1"><img src="images/restaurant/emptyStar.png" width="30" alt="Very Bad" /></label></span>
</div>

<?php
echo "</div>";

?>

