<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
include 'bd.php';	


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
   case "POST":
      $brand = $_POST['brand'];
      $category = $_POST['category'];
      $arrBrand = array();
      $checkBrand = mysqli_query(
         $conn, "SELECT * FROM products WHERE brand = '".$brand."' AND category = '".$category."'");

         if($checkBrand) {
            while($r = mysqli_fetch_assoc($checkBrand)) {
               $arrBrand[] = $r;
            }
            // print_r($arrBrand[0]['brand']);
            if($arrBrand[0]['brand'] === $brand){
               echo json_encode($arrBrand);
            } else {
               echo 'false';
            }
         } else {
            echo 'false';
         }
   $conn->close();
}
?>