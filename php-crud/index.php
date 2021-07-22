<?php
 
 header("Content-Type: application/json");
 header("Acess-Control-Allow-Origin: *");

 $conn = mysqli_connect("localhost","root","","php_crud_api_db");
 $response = array();
 if ($conn){
       $sql = "select * from tbl_product";
       
       $result = mysqli_query($conn,$sql);
       
       if($result){
        header("Content-Type: JSOM ");
        
        $i = 0;
           while($row = mysqli_fetch_assoc($result)){
               $response[$i]['product_id'] = $row['product_id'];
               $response[$i]['product_name'] = $row['product_name'];
               $response[$i]['product_price'] = $row['product_price'];
               

               $i++;

           }
           echo json_encode($response,JSON_PRETTY_PRINT);
       }
 

 }
 else{
    echo "Database connection failed";}
?>