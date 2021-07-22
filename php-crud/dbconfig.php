<?php

$DBHost ="localhost";
$DBUser ="root";
$DBpassword="";
$DBname = "php_crud_api_db";

$conn = mysqli_connect($DBHost,$DBUser,$DBpassword,$DBname);
if (!$conn){
    die("Connection failed: " .mysqli_connecet_error());

}
?>