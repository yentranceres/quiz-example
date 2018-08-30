<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizexample";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("connection failed:" . $conn->connect_error);
}

$sql = "SELECT id, question from listquestion";
$result = $conn->query($sql);

//delete db
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['id'])) {
        $id = $_POST['id'];


        $sql = "DELETE FROM listquestion WHERE id=$id ";
        echo $sql;

    }
        $result = mysqli_query($conn, $sql);
        header('Location: question_table.php');
}


$conn->close();