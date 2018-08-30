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

$sql = "SELECT id, question, answer1, answer2, answer3, answer4, correct_answer from listquestion";
$result = $conn->query($sql);

//edit
$id = '';
$question = '';
$answer1 = '';
$answer2 = '';
$answer3 = '';
$answer4 = '';
$correct_answer = '';

if (isset($_GET['id'])) {
    if (isset($_GET["id"])) {
        $id = $_GET['id'];

        $query = "SELECT $id FROM listquestion";
        $result = mysqli_query($conn, $query);
    }
    if (isset($_POST['submit'])) {
        if (isset($_POST["question"])) {
            $question = $_POST['question'];
        }
        if (isset($_POST["answer1"])) {
            $answer1 = $_POST['answer1'];
        }
        if (isset($_POST["answer2"])) {
            $answer2 = $_POST['answer2'];
        }
        if (isset($_POST["answer3"])) {
            $answer3 = $_POST['answer3'];
        }
        if (isset($_POST["answer4"])) {
            $answer4 = $_POST['answer4'];
        }
        if (isset($_POST["radioanswer"])) {
            $correct = $_POST['radioanswer'];
        }

        $query = "UPDATE listquestion
         SET question= '" . $question . "',answer1='" . $answer1 . "',answer2='" . $answer2 . "',answer3='" . $answer3 . "',answer4='" . $answer4 . "',correct_answer= '" . $correct . "' 
         WHERE id= $id";
        $result = mysqli_query($conn, $query);
        echo $query;

        if ($result) {
            header("location: question_table.php");
            echo "update successfully";
            exit();
        } else {
            echo "not update";
        }
    }
}
$conn->close();




