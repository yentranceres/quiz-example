<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname   = "quizexample";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
if ($conn -> connect_error){
    die("connection failed:". $conn -> connect_error);
}

$sql = "SELECT id, question from listquestion";
$result = $conn ->query($sql);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/quiz_css.css">
</head>

<body>
<div class="container table-body">
    <h1 class="header-table">QUESTION DATABASE</h1>
    <table class="data-table">
        <thead>
        <tr>
            <th class="id-column">ID</th>
            <th class="question-column">QUESTION</th>
            <th class="action-column" colspan="2">ACTION</th>
        </tr>
        <tr>
            <?php
            if ($result -> num_rows > 0) {
                while ($row = $result -> fetch_assoc()) {
                    echo "<tr>
                            <td>" . $row["id"] . "</td>
                            <td>" . $row["question"] . "</td>
                            <td><div class='delete-row'>
                                <a href='#'><i class='glyphicon glyphicon-edit edit-button' ></i></a>
                            </div></td>
                            <td><a href='#'><i class='glyphicon glyphicon-trash delete-button' href='#'></i></a></td>
                          </tr>";
                }
                echo "</table>";
            } else {
                echo "0 result";
            }

            $conn ->close();
            ?>

</div>

<footer>
 <script src="js/question_table.js"></script>
</footer>
</body>


</html>
