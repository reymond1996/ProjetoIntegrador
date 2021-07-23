<?php
header("Content-Type: application/json");
header("Acess-Control-Allow-Origin *");


$data = json_decode(file_get_contents("php://input"),true);
$psearch = $data["search"];


//$conn = mysqli_connect("localhost","root","","php_crud_api_db");

require_once "dbconfig.php";
$query = "SELECT * FROM tbl_product  WHERE product_name LIKE '%".$psearch. "%' " ;

$result = mysqli_query($conn,$query) or die("Search Query Failed");

$count = mysql_num_rows($result);

if($count >0) {
    $row = mysqli_fetch_all($result, MYSQL_ASSOC);

    echo json_encode($row);
}
else{
    echo json_encode(array("message" => "No Search Found", "status" => false)); 
}


?>