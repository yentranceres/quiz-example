<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/quiz_css.css">
</head>

<body>
<?php include('submit.php') ?>
<div class="container form-body">
    <h1 class="title-add">ADD NEW QUESTION</h1>

    <form action="form_question.php" method="post" class="form-horizontal">
        <div class="question-input">
            <div class="row">
                <label for="main-question" class="col-sm-2 control-label input-question">Your Question</label>
                <div class="col-md-7">
                    <textarea class="form-control text-question" rows="4" type="text" name="question"></textarea>
                    <p class="error-message">** This field is required</p>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>

        <div>
            <div class="row">
                <label for="answer1" class="col-sm-2 control-label">Answer 1</label>
                <div class="col-md-6 input-answer">
                    <input type="text" class="form-control" id="answer1" name="answer1" placeholder="Answer">
                    <div>
                        <p class="error-message1">** This field is required</p>
                    </div>
                </div>
                <div class="col-md-4 checkbox">
                    <label>
                        <input class="checkbox-radio" type="radio" name="radioanswer" value="a" > Check me if this is a correctly answer
                    </label>
                </div>
            </div>
        </div>

        <div>
            <div class="row">
                <label for="answer2" class="col-sm-2 control-label">Answer 2</label>
                <div class="col-md-6 input-answer">
                    <input type="text" class="form-control" id="answer2" name="answer2" placeholder="Answer">
                    <div>
                        <p class="error-message2">** This field is required</p>
                    </div>
                </div>
                <div class="col-md-4 checkbox">
                    <label>
                        <input class="checkbox-radio" type="radio" name="radioanswer" value="b" > Check me if this is a correctly answer
                    </label>
                </div>
            </div>
        </div>

        <div>
            <div class="row">
                <label for="answer3" class="col-md-2 control-label">Answer 3</label>
                <div class="col-md-6 input-answer">
                    <input type="text" class="form-control" id="answer3" name="answer3" placeholder="Answer">
                    <div>
                        <p class="error-message3">** This field is required</p>
                    </div>
                </div>
                <div class="col-md-4 checkbox">
                    <label>
                        <input class="checkbox-radio" type="radio" name="radioanswer" value="c" > Check me if this is a correctly answer
                    </label>
                </div>
            </div>
        </div>

        <div>
            <div class="row">
                <label for="answer4" class="col-md-2 control-label">Answer 4</label>
                <div class="col-md-6 input-answer">
                    <input type="text" class="form-control" id="answer4" name="answer4" placeholder="Answer">
                    <div>
                        <p class="error-message4">** This field is required</p>
                    </div>
                </div>
                <div class="col-md-4 checkbox">
                    <label>
                        <input class="checkbox-radio" type="radio" name="radioanswer" value="d" > Check me if this is a correctly answer
                    </label>
                </div>
            </div>
        </div>

        <div class="start-btn">
            <input class="btn btn-success btn-lg start-button" type="button" value="save">
        </div>
    </form>

</div>

<footer>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/general.js"></script>
    <script src="js/validation_submit.js"></script>


</footer>
</body>
</html>