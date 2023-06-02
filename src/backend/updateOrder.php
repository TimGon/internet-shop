<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
include 'bd.php';	


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
   case "POST":
      $id_order = $_POST['idOrder'];
      $name_order = $_POST['stateOrder'];
      $type_delivery = $_POST['delive'];

      $checkID = mysqli_fetch_assoc(
         mysqli_query($conn, "SELECT * FROM orders 
         WHERE id = '".$id_order."'")
      );

      $sql_query_upd = "UPDATE orders SET 
         state_order='".$name_order."' '".$type_delivery."' WHERE id ='".$id_order."'";
      
      if($checkID === null){
         echo 'false';
      }
      else{
         $res = mysqli_query($conn, $sql_query_upd);
      }
      $conn->close();
}
?>