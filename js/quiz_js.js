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

            buttonPrevious();

            checkAnswer(questionNumber, answerNumber, currentId, data);

        });

        $(document).on('click', '.pre-button', function () {
            buttonNext();
        });

        $(document).on('click', '.done-button', function (data) {
            var currentId = $('.quiz:visible').data('id');
            var firstIndex = missAnswer[0];
            var questionNumber = $(this).parents('.content-body').find('.active').data('id');
            var answerNumber = $("input[name='optionsradio" + currentId + "']:checked").val();

            checkAnswer(questionNumber, answerNumber, currentId, data);
            $('[data-id="' + firstIndex + '"]').show();
            $('[data-id="' + currentId + '"]').hide();

            buttonPrevious();
            buttonNext();

            compareArray(userInputs, data);
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

    function buttonPrevious() {
        var currentId = $('.quiz:visible').data('id');
        var nextId = $('.quiz:visible').data('id') + 1;
        var preId = $('.quiz:visible').data('id') - 1;
        console.log(preId);
        console.log(nextId);

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

    function buttonNext() {
        var currentId = $('.quiz:visible').data('id');
        var preId = $('.quiz:visible').data('id') - 1;

        $('[data-id="' + currentId + '"]').hide().removeClass('active');
        $('[data-id="' + preId + '"]').show().addClass('active');
        $('.done-button').hide();
        $('.next-button').show();

        if (preId == 1) {
            $('.pre-button').hide();
        }
    }


    function checkAnswer(question, answer, id, allAnswers) {
        var obj = {
            question: question,
            answer: answer,
            id: id
        };

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

        if (index == null) { //update
            if (obj.answer == undefined) {
                missAnswer.push(obj.id);
            } else {
                userInputs.push(obj);
            }
        } else { //create
            userInputs[index] = obj;
        }
    }

    function compareArray(userInputs, allAnswers) {
        var score = 0;
        for (var x = 0; x < userInputs.length; x++) {
            for (var k = 0; k < allAnswers.length; k++) {

                if (userInputs[x].question == allAnswers[k].id) {
                    if (userInputs[x].answer == allAnswers[k].correct) {
                        score = score + 1;
                    }
                    else {
                        score = score;
                    }
                }
            }
        }
        $('#result').append('Your score is ' + score);
        $('.content-body').hide();
    }

});