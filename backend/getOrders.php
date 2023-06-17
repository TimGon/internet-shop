<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'bd.php';

$query = mysqli_query($conn, "SELECT id, number_order, title_product,name_client, sum_order, state_order, type_delivery, type_pay FROM orders");

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