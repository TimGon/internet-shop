<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'bd.php';

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $name_client = $_POST['name'];
        $pass_client = $_POST['pass'];
        
        $checkUser = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM clients WHERE name_client = '".$name_client."'"));
        if($checkUser != null) {
            $check = mysqli_fetch_row(mysqli_query($conn, "SELECT name_client, pass_client, phone_client, email_client FROM clients WHERE name_client = '".$name_client."'"));
            // print_r($check);
            if($check[0] === $name_client && password_verify($pass_client, $check[1])){
                echo $check[0], ",", $check[2], ",", $check[3], ","; 
            } else {
                echo 'false';
            }
        } else {
            echo 'false';
        }

        $conn->close();
}
?> 