<?php

header('Content-Type: application/json; charset=utf-8');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT');
header('Accept: application/json');
header('Content-type: application/json');
$DBHost ="localhost";
$DBUser ="root";
$DBpassword="";
$DBname = "mydb";

$conn = mysqli_connect($DBHost,$DBUser,$DBpassword,$DBname);
if (!$conn){
    die("Connection failed: " .mysqli_connecet_error());

}
?>