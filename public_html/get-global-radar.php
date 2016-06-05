<?php
header('Content-type: application/json');
require './lib/firebase.php';
$firebase = getFirebase();

echo json_encode($firebase->get('/'));
?>
