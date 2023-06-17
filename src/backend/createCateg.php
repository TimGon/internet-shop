<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
include 'bd.php';	


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $name_title = $_POST['title_product'];
        $categ_title = $_POST['nameImg'];

        $checkName = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM category WHERE title_product = '".$name_title."'"));
        $checkCateg = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM category WHERE nameImg = '".$categ_title."'"));
        $sql_query_add = "INSERT INTO category(id, title_product, nameImg) VALUES(NUll, '$name_title', '$categ_title')";
        
        if($checkName != null || $checkCateg != null){
            echo 'false';
        }
        else{
            $res = mysqli_query($conn, $sql_query_add);
        }
        $conn->close();
}
?>