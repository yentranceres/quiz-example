<?php
//Sumbit Form
include('data.php');
$question = '';
$answer1 = '';
$answer2 = '';
$answer3 = '';
$answer4 = '';
$correct_answer = '';



if (count($_POST)) {
    $valid = false;
    if ($_POST['question'] != '' && $_POST['answer1'] != '' && $_POST['answer2'] != '' && $_POST['answer3'] != '' && $_POST['answer4'] != '' && $_POST['radioanswer'] != '') {
        $valid = true;
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        if ($valid) {
            if (isset($_POST["question"])) {$question = $_POST['question'];}
            if (isset($_POST["answer1"])) {$answer1 = $_POST['answer1'];}
            if (isset($_POST["answer2"])) {$answer2 = $_POST['answer2'];}
            if (isset($_POST["answer3"])) {$answer3 = $_POST['answer3'];}
            if (isset($_POST["answer4"])) {$answer4 = $_POST['answer4'];}
            if (isset($_POST["radioanswer"])) {$correct_answer = $_POST['radioanswer'];}

            //sql
            $sql = "INSERT INTO listquestion (question, answer1, answer2, answer3, answer4, correct_answer ) 
                    VALUES ('$question','$answer1', '$answer2', '$answer3', '$answer4', '$correct_answer')";
            var_dump($sql);

            //execute
            if ($conn->query($sql) === TRUE) {
               header("location: form_question.php");
               exit;
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }else {
            echo "Please input to all fields";
    }
}
}
//Close connection
$conn->close();

?>