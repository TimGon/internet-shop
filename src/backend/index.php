<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
include 'bd.php';	


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $name_client = $_POST['name'];
        $pass_client = $_POST['pass'];
        $email_client = $_POST['email'];
        $phone_client = $_POST['phone'];

        $pass_client_hash = password_hash($pass_client, PASSWORD_BCRYPT);
        $checkUser = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM clients WHERE name_client = '".$name_client."'"));
        $checkEmail = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM clients WHERE email_client = '".$email_client."'"));
        $checkPhone = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM clients WHERE phone_client = '".$phone_client."'"));
        $sql_query_add = "INSERT INTO clients(id, name_client, pass_client, email_client, phone_client) VALUES(NUll, '$name_client', '$pass_client_hash', '$email_client', '$phone_client')";
        
        if($checkUser != null || $checkEmail != null || $checkPhone != null){
            echo 'false';
        }
        else{
            echo 'true';
            $res = mysqli_query($conn, $sql_query_add);
        }
        $conn->close();
}
?>