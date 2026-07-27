<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "logindb";
$port = "3307";

$conn=mysqli_connect($servername, $username, $password, $dbname, $port);
if ($conn){
    echo "db connected";
}
else {
    echo "not";
}
?>