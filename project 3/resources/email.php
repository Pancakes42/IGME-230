<?php
    $address = $_GET["name"];
    $message = $_GET["message"];

    mail("wtw1820@rit.edu","Email from " . $address,$message);

?>