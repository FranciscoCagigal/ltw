<?php
  try {
     $dbh = new PDO('sqlite:database/basedados.db');
     
  } catch (PDOException $e) {
     die($e->getMessage());
  }
?>