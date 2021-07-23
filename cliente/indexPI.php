<?php
 
 header("Content-Type: application/json");
 header("Acess-Control-Allow-Origin: *");

// $conn = mysqli_connect("localhost","root","","mydb");
include_once "dgconfigPI.php";
 $response = array();
 if ($conn){
       $sql = "select * from cliente";
       
       $result = mysqli_query($conn,$sql);
       
       if($result){
        header("Content-Type: JSOM ");
        
        $i = 0;
           while($row = mysqli_fetch_assoc($result)){
               $response[$i]['idCliente'] = $row['idCliente'];
               $response[$i]['Nome'] = $row['Nome'];
               $response[$i]['Email'] = $row['Email'];
               $response[$i]['Senha'] = $row['Senha'];
               $response[$i]['Cpf'] = $row['Cpf'];
               
               

               $i++;

           }
           echo json_encode($response,JSON_PRETTY_PRINT);
       }
 

 }
 else{
    echo "Database connection failed";}
?>