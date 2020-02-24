<?php

$temp = 1234;

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "isohack";
$port = 3306;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);
// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "select * from hashvalue where hash_key =1234";
// echo($sql);

$result = $conn-> query($sql);

if($result->num_rows>0){
WHILE($row = $result->fetch_assoc()){
     echo "aaa" . $row["hash_id"];
}
}
else 
{
    echo "bye";
}

// if ($result = mysqli_query($conn, $sql))
// {
//     echo "aao" . mysqli_num_rows($result);
//     // echo (mysqli_free_result($result));
// }

// if ($conn->query($sql) === TRUE) {
//     echo "<script>alert(Data Successfull Registered)</script>";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// $conn->close();


?>