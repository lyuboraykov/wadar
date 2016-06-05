<?php
require './lib/firebase.php';
$firebase = getFirebase();

$value = $_POST(['radar']);

$firebase->set($value);
?>
