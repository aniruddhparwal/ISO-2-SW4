<?php

$patient_name = $_POST['patient_name'];
$age = $_POST['age'];
$address = $_POST['address'];
$address2 = $_POST['address2'];
$city = $_POST['city'];
$state = $_POST['state'];
$disease = $_POST['disease'];
$cure = $_POST['cure'];
$file = $_POST['file'];


$servername = "localhost";
$username = "root";
$password = "ani@123456";
$dbname = "isohack";
$port = 3306;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);
// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO  patient_details(patient_name, age, address,address2, city, state, disease, cure, file)
VALUES ('$patient_name', '$age', '$address','$address2','$city', '$state', '$disease','$cure','$file')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert(Data Successfull Registered)</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>