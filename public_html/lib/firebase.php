<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Kreait\Firebase\Configuration;
use Kreait\Firebase\Firebase;

function getFirebase() {
    $URL = "https://project-8514226309654744846.firebaseio.com";

    $firebase = new Firebase($URL);

    return $firebase;
}

?>
