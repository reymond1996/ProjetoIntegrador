<?php
require_once "dbconfigPI.php";



$data = json_decode(file_get_contents("php://input"),true);
$pcnome = $data["cnome"];
$pcemail = $data["cemail"];
$pcsenha = $data["csenha"];
$pccpf = $data["ccpf"];

//var_dump($data);die;


//$conn = mysqli_connect("localhost","root","","php_crud_api_db");

$query = "INSERT INTO cliente(Nome,Email,Senha,Cpf)
    values('".$pcnome."','".$pcemail."','".$pcsenha."','".$pccpf."')";

if (mysqli_query($conn,$query)or die("Insert Query Failed"));
{
    echo json_encode(array("message" => "Produto Inserido com Sucesso", "status" => true));
}
else
{
    echo json_encode(array("message" => "Failed Not Inserted", "status" => false));

}
 


?>