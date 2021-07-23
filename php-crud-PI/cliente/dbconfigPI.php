<?php

$DBHost ="localhost";
$DBUser ="root";
$DBpassword="";
$DBname = "mydb";

$conn = mysqli_connect($DBHost,$DBUser,$DBpassword,$DBname);
if (!$conn){
    die("Connection failed: " .mysqli_connecet_error());

}
?>