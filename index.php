<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/quiz_css.css">
</head>

<body>
<div class="container content-body">
    <div class="body-quiz"></div>

    <div class="btn-nav">
        <a class="btn btn-info btn-lg pre-button" href="#" role="button">
            <i class="glyphicon glyphicon-arrow-left"></i>
            PREVIOUS
        </a>

        <a class="btn btn-info btn-lg next-button" href="#" role="button">
            NEXT
            <i class="glyphicon glyphicon-arrow-right"></i>
        </a>

        <a class="btn btn-success btn-lg done-button" href="#" role="button">
            DONE
            <i class="glyphicon glyphicon-ok"></i>
        </a>
    </div>

</div>
<div>
    <div id="result">
        <h1 class='total-score'>Your score is: </h1>
        <div class="body-result">
            <div class='total-correctAnswer'></div>
        </div>
    </div>

</div>

<footer>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/general.js"></script>
</footer>
</body>
</html>
