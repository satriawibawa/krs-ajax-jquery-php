<?php

$id = $_GET['id'];
require '../../config/koneksi.php';
$sql = "DELETE FROM matkul WHERE id_matkul = $id"; 

if (mysqli_query($koneksi, $sql)) {
    mysqli_close($koneksi);
    header('Location: read.php'); //If book.php is your main page where you list your all records
    exit;
} else {
    echo "Error deleting record";
}
?>