<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
include 'bd.php';	


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
   case "POST":
      $id_categ = $_POST['idUpd'];
      $name_title = $_POST['titles'];
      $categ_title = $_POST['categs'];

      $checkID = mysqli_fetch_assoc(
         mysqli_query($conn, "SELECT * FROM category 
         WHERE id = '".$id_categ."'")
      );

      $sql_query_upd = "UPDATE category SET 
      title_product = '".$name_title."', 
      nameImg='".$categ_title."' WHERE id ='".$id_categ."'";
      
      if($checkID === null){
         echo 'false';
      }
      else{
         $res = mysqli_query($conn, $sql_query_upd);
      }
      $conn->close();
}
?>