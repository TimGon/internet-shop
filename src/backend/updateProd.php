<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
include 'bd.php';	


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
   case "POST":
      $id_prod = $_POST['idProd'];
      $name_prod = $_POST['titleProd'];
      $dscr_prod = $_POST['descrProd'];
      $cost_prod = $_POST['costProd'];
      $categ_prod = $_POST['categ'];
      $brand_prod = $_POST['brandProd'];
      $img_prod = $_POST['imgProd'];

      $checkID = mysqli_fetch_assoc(
         mysqli_query($conn, "SELECT * FROM products
         WHERE id = '".$id_prod."'")
      );

      $sql_query_upd = "UPDATE products SET 
         title_product='".$name_prod."', descr ='".$dscr_prod."', category='".$categ_prod."', brand ='".$brand_prod."', cost_product ='".$cost_prod."', img='".$img_prod."' WHERE id ='".$id_prod."'";
      
      if($checkID === null){
         echo 'false';
      }
      else{
         $res = mysqli_query($conn, $sql_query_upd);
      }
      $conn->close();
}
?>