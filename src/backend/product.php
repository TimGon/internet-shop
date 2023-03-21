<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'bd.php';

$query = mysqli_query($conn, "SELECT title_product, category, cost_product, img FROM products");
$rows = array();
while($r = mysqli_fetch_assoc($query)) {
    $rows[] = $r;
}
if($query) {
    echo json_encode($rows);
} else {
    echo 'Ошибка';
}

?>