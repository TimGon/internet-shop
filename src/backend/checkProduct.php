<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'bd.php';

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $name_url = $_POST['nameUrl'];
        $arrProduct = array();
        $checkProduct = mysqli_query($conn, "SELECT * FROM products WHERE category = '".$name_url."'");

        if($checkProduct) {
            while($r = mysqli_fetch_assoc($checkProduct)) {
                $arrProduct[] = $r;
            }
            if($arrProduct[0]['category'] === $name_url){
                echo json_encode($arrProduct);
            } else {
                echo 'false';
            }
        } else {
            echo 'false';
        }

        $conn->close();
}
?> 