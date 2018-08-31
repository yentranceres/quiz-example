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
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/quiz_css.css">
</head>
<body>
<div class="container form-body">
    <form name="form1" method="post" action="update.php?flag=1&id=<?= $_REQUEST['id'] ?>">
        <?php
        if (isset($_GET["id"])) {
            $id = $_GET['id'];
            while ($row = $result->fetch_assoc()) {
                if ($id == $row['id']) {
                    echo "
                            <div>
                                <h4> Question </h4>
                                <textarea class='form-control text-question' rows='4' name='question' required>" . $row['question'] . "</textarea>
                            </div>
                            
                            <div>
                                <h4>Answer 1:</h4>
                                <input type='text' class='form-control' id='answer1' name='answer1' placeholder='Answer' value='" . $row["answer1"] . "' required>
                                <input class='checkbox-radio' type='radio' name='radioanswer' value='a' required> Check me if this is a correctly answer
                            </div>

                            <div>
                                <h4>Answer 2:</h4>
                                <input type='text' class='form-control' id='answer2' name='answer2' placeholder='Answer' value='" . $row["answer2"] . "' required>
                                <input class='checkbox-radio' type='radio' name='radioanswer' value='b' required> Check me if this is a correctly answer
                            </div>
                            
                            <div>
                                <h4>Answer3:</h4>
                                <input type='text' class='form-control' id='answer3' name='answer3' placeholder='Answer' value='" . $row["answer3"] . "' required>
                                <input class='checkbox-radio' type='radio' name='radioanswer' value='c' required> Check me if this is a correctly answer
                            </div>
                            
                            <div>
                                <h4>Answer4:</h4>
                                <input type='text' class='form-control' id='answer4' name='answer4' placeholder='Answer' value='" . $row["answer4"] . "' required>
                                <input class='checkbox-radio' type='radio' name='radioanswer' value='d' required> Check me if this is a correctly answer
                            </div>
                            
                            <div>
                                <input class='btn btn-success btn-lg update-btn' type='submit' name='submit' value='UPDATE'>
                            </div>
                            ";
                }
            }
        }
        ?>
    </form>
</div>
<footer>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/question_table.js"></script>
</footer>
</body>
</html>
