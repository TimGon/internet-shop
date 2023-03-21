<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'bd.php';

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $name_url = $_POST['nameUrl'];
        
        $checkCategory = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM category WHERE nameImg = '".$name_url."'"));
        if($checkCategory != null) {
            $arrCateg = mysqli_fetch_row(mysqli_query($conn, "SELECT * FROM category WHERE nameImg = '".$name_url."'"));

            // print_r($arrCateg);
            // print_r($arrProduct);
            if($arrCateg[2] === $name_url){
                echo json_encode($arrCateg);
            } else {
                echo 'false';
            }
        } else {
            echo 'false';
        }

        $conn->close();
}
?> 