<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'bd.php';

$query = mysqli_query($conn, "SELECT id, title_product, nameImg FROM category");
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