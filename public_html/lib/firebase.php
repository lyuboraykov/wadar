<?php
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config.php';

use Kreait\Firebase\Configuration;
use Kreait\Firebase\Firebase;

function getFirebase() {
    $URL = Config::$DB_URL;

    $firebase = new Firebase($URL);

    return $firebase;
}

?>
