<?php


header("Content-Type: application/json");
header("Acess-Control-Allow-Origin *");
header("Acess-Control-Allow-Methods: POST");
header("Acess-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Acess-Control-Allow-Methods,Authorization");

$data = json_decode(file_get_contents("php://input"),true);
$pfun = $data["fnome"];
$pfemail = $data["femail"];

// var_dump($data);die;

require_once "dbconfigPI.php";

//$conn = mysqli_connect("localhost","root","","php_crud_api_db");

$query = "INSERT INTO funcionario(Nome_Funcionario,Email_Funcionario)
    values('".$pfun."','".$pfemail."')";

if (mysqli_query($conn,$query)or die("Insert Query Failed"))
{
    echo json_encode(array("message" => "Produto Inserido com Sucesso", "status" => true));
}
else
{
    echo json_encode(array("message" => "Failed Not Inserted", "status" => false));

}
 


?>