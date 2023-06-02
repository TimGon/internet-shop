<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'bd.php';

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $name_client = $_POST['user'];
        $arrOrders = array();
        $checkUser = mysqli_query($conn, "SELECT * FROM orders WHERE name_client = '".$name_client."'");
      //   print_r($checkUser);
        if($checkUser) {
            while($r = mysqli_fetch_assoc($checkUser)) {
                $arrOrders[] = $r;
            }
            
            if($arrOrders === []) {
               echo 'false';
            } else {
               if($arrOrders[0]['name_client'] === $name_client){
                  echo json_encode($arrOrders);
              } else {
                  echo 'false';
              }
            }
        } else {
            echo 'false';
        }

        $conn->close();
}
?> 