<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname   = "quizexample";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Fetch from listquestion
$result = $conn->query("SELECT * FROM listquestion");

//Initialize array variable
$data = array();

//Fetch into associative array
while ( $row = $result->fetch_assoc())  {
    $data[]=$row;
}

//Print array in JSON format
echo json_encode($data);


