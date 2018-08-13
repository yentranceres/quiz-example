$(document).ready(function () {
    var userInputs = [];
    console.log(userInputs);
    var missAnswer = [];
    console.log(missAnswer);

    $.getJSON('js/data.json', function (data) {
        getQuestion(data); //show question html


        // When user click "Next" and "Previous" --> next question
        $(document).on('click', '.next-button', function () {
            var currentId = $('.quiz:visible').data('id');
            var questionNumber = $(this).parents('.content-body').find('.active').data('id');
            var answerNumber = $("input[name='optionsradio" + currentId + "']:checked").val();

            buttonNext();

            //check answer
            if (answerNumber == undefined) {
                noAnswer(questionNumber, answerNumber, currentId, data);
            } else {
                hasAnswer(questionNumber, answerNumber, currentId, data);
            }
            removeTheSameAnswer(currentId, missAnswer, userInputs);
        });

        $(document).on('click', '.pre-button', function () {
            buttonPrevious();
        });

        $(document).on('click', '.done-button', function () {
            var currentId = $('.active').data('id');
            var questionNumber = $(this).parents('.content-body').find('.active').data('id');
            var answerNumber = $("input[name='optionsradio" + currentId + "']:checked").val();

            //check answer

            if (answerNumber == undefined) {
                noAnswer(questionNumber, answerNumber, currentId, data);
            } else {
                hasAnswer(questionNumber, answerNumber, currentId, data);
            }
            removeTheSameAnswer(currentId, missAnswer, userInputs);

            //back to question does not have answer
            if (missAnswer.length === 0) {
                compareArray(questionNumber, answerNumber, userInputs, data);
            }
            else {
                backToQuestion();
            }
        });
    });


    <!-- all Functions -->

    function getQuestion(allAnswers) {
        var nId;

        if (allAnswers) { //check presence of allAnswer
            for (j = 0; j < allAnswers.length; j++) {
                nId = j + 1;
                $('.body-quiz').append(
                    "<div class='quiz " + (nId == 1 ? 'first active' : '') + "' data-id='" + nId + "'>"
                    + "<div class='question'><h4>" + allAnswers[j].question + "</h4></div>"
                    + "<div class='radio'><input class='option' type='radio' name='optionsradio" + nId + "' value='" + allAnswers[j].answer[0] + "'>" + allAnswers[j].answer[0] + "</div>"
                    + "<div class='radio'><input class='option' type='radio' name='optionsradio" + nId + "' value='" + allAnswers[j].answer[1] + "'>" + allAnswers[j].answer[1] + "</div>"
                    + "<div class='radio'><input class='option' type='radio' name='optionsradio" + nId + "' value='" + allAnswers[j].answer[2] + "'>" + allAnswers[j].answer[2] + "</div>"
                    + "<div class='radio'><input class='option' type='radio' name='optionsradio" + nId + "' value='" + allAnswers[j].answer[3] + "'>" + allAnswers[j].answer[3] + "</div>"
                    + "</div>");
            }
        }
    }

    function buttonNext() {
        var currentId = $('.quiz:visible').data('id');
        var nextId = $('.quiz:visible').data('id') + 1;

        $('[data-id="' + currentId + '"]').hide().removeClass('active');
        $('[data-id="' + nextId + '"]').show().addClass('active');
        if ($('.pre-button:hidden').length == 1) {
            $('.pre-button').show();
        }
        if (nextId == 5) {
            $('.next-button').hide();
            $('.done-button').show();
        }
    }

    function buttonPrevious() {
        var currentId = $('.quiz:visible').data('id');
        var preId = $('.quiz:visible').data('id') - 1;

        $('[data-id="' + currentId + '"]').hide().removeClass('active');
        $('[data-id="' + preId + '"]').show().addClass('active');
        $('.done-button').hide();
        $('.result-button').hide();
        $('.next-button').show();

        if (preId == 1) {
            $('.pre-button').hide();
        }
    }

    function hasAnswer(question, answer, id, allAnswers) {
        var obj = {
            question: question,
            answer: answer,
            id: id
        };

        var currentId = $('.active').data('id');

        //check question has been stored ?????
        var index = null;

        for (var i = 0; i < allAnswers.length; i++) {
            if (userInputs[i] == undefined) {
                continue;
            }

            if (userInputs[i].question == obj.question) {
                index = i;
            }
        }

        if (index == null) { //create
            userInputs.push(obj);
        } else { //update
            userInputs[index] = obj;
        }
    }

    function noAnswer(question, answer, id, allAnswers) {
        var obj = {
            question: question,
            answer: answer,
            id: id
        };

        //check question has been stored ?????
        var index = null;

        for (var w = 0; w < allAnswers.length; w++) {
            if (missAnswer[w] == undefined) {
                continue;
            }

            if (missAnswer[w].question == obj.question) {
                index = w;
            }
        }

        if (index == null) { //create
            missAnswer.push(obj);
        } else { //update
            missAnswer[index] = obj;
        }
    }

    function removeTheSameAnswer(id, missAnswer, userInputs) {
        for (var f = 0; f < userInputs.length; f++) {
            for (var d = 0; d < missAnswer.length; d++) {
                if (userInputs[f].id == missAnswer[d].id) {
                    missAnswer.splice(0, 1);
                }
            }
        }
    }

    function compareArray(question, answer, userInputs, allAnswers) {
        var score = 0;

        for (var x = 0; x < userInputs.length; x++) {
            for (var k = 0; k < allAnswers.length; k++) {

                if (userInputs[x].question == allAnswers[k].id) {
                    if (userInputs[x].answer == allAnswers[k].correct) {
                        score = score + 1;
                        $(".total-correctAnswer").append(+ allAnswers[k].id + "." + allAnswers[k].correct + "<br>").show();
                        }
                    } else {
                        score = score;
                    }
                }
            }
            $(".total-score").append(score).show();
            $('.content-body').hide();
    }

    function backToQuestion() {
        var currentId = $('.active').data('id');
        var firstIndex = missAnswer[0].id;

        if (firstIndex != 5) {
            alert("You are missing something");
            $('[data-id="' + firstIndex + '"]').show();
            $('[data-id="' + currentId + '"]').hide();
            $('.done-button').hide();
            $('.next-button').show();

        }
        else {
            $('[data-id="' + firstIndex + '"]').show();
            $('.next-button').hide();
        }
    }

});