<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'bd.php';
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $categ_id = $_POST['id'];

        $categ_del = "DELETE FROM category WHERE id = '".$categ_id."'";
        if($categ_id) {
            $res = mysqli_query($conn, $categ_del);
            echo $categ_id;
        } else {
            echo 'false';
        }
}


$conn->close();
