<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'bd.php';
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $prod_id = $_POST['idDel'];

        $prod_del = "DELETE FROM products WHERE id = '".$prod_id."'";
        if($prod_id) {
            $res = mysqli_query($conn, $prod_del);
            echo $prod_id;
        } else {
            echo 'false';
        }
}


$conn->close();
