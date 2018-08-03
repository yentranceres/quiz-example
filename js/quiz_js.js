$(document).ready(function () {
    var userInputs = [];
    var missAnswer = [];
    console.log(missAnswer);

    //Show question
    $.getJSON('js/data.json', function (data) {
        getQuestion(data);

        //Click option to select answer
        $(document).on('click', '.option', function () {
            var questionID = $(this).parents('.quiz').data('id');
            var answerID = $(this).attr('value');
            addUserInput(questionID, answerID, data);
        });

        // When user click "Next" and "Previous"
        $(document).on('click', '.next-button', function () {
            var id = $('.quiz:visible').data('id');
            var nextId = $('.quiz:visible').data('id') + 1;
            var missQuestionId = $(this).parents('.content-body').find('.active').data('id');

            //Question has not had answer
            missingQA(missQuestionId, userInputs,missAnswer);

            //Switch question
            $('[data-id="' + id + '"]').hide().removeClass('active');
            $('[data-id="' + nextId + '"]').show().addClass('active');
            if ($('.pre-button:hidden').length === 1) {
                $('.pre-button').show();
            }
            if (nextId === 5) {
                $('.next-button').hide();
                $('.done-button').show();
            }
        });

        $(document).on('click', '.pre-button', function () {
            var id = $('.quiz:visible').data('id');
            var preId = $('.quiz:visible').data('id') - 1;
            $('[data-id="' + id + '"]').hide().removeClass('active');
            $('[data-id="' + preId + '"]').show().addClass('active');
            $('.done-button').hide();
            $('.next-button').show();

            if (preId === 1) {
                $('.pre-button').hide();
            }
        });

        //submit answer
        $(document).on('click', '.done-button', function (data) {
            var missQuestionId = $(this).parents('.content-body').find('.active').data('id');
            missingQA(missQuestionId, userInputs,missAnswer);
            compareArray(userInputs, data);
        });
    });

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

    function addUserInput(question, answer, allAnswers) {
        var obj = {
            question: question,
            answer: answer
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

        if (index !== null) { //update
            userInputs[index] = obj;
        } else { //create
            userInputs.push(obj);
        }
    }

    console.log(userInputs);

    //Question has not had answer
    function missingQA(question, userInputs, missAnswer) {
        var missQuestion = {question: question};
        if (){
            missAnswer.push(missQuestion);
        }

        if (missAnswer){
            for (y = 0; y <= missAnswer.length; y++){
                for (t = 0; t <= userInputs.length; t++){
                    if (missAnswer[y]== userInputs[t]){
                        missAnswer.slice(y,1);
                    }
                }
            }
        }
    }


        //caculate score
        function compareArray(userInputs ,allAnswers, missAnswer) {
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


