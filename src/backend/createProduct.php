<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
include 'bd.php';	


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $title_product = $_POST['title_product'];
        $dscr = $_POST['dscr'];
        $cost = $_POST['cost'];
        $categ = $_POST['categ'];
        $brand = $_POST['brand'];
        $nameImg = $_POST['nameImg'];

        $checkTitle = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM products WHERE title_product = '".$title_product."'"));

        $sql_query_add = "INSERT INTO products(id, title_product, descr, category, brand, cost_product, img) VALUES(NUll, '$title_product', '$dscr','$categ', '$brand', '$cost', '$nameImg')";

        if($checkTitle != null){
            echo 'false';
        }
        else{
            $res = mysqli_query($conn, $sql_query_add);
        }
        $conn->close();
}