<?php
require './lib/firebase.php';
$firebase = getFirebase();

$value = json_decode(file_get_contents('php://input'), true);

$firebase->set($value, '/');
?>
