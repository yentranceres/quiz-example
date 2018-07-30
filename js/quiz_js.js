$(document).ready(function () {


    // When user click "Next" and "Previous"
    $(document).on('click', '.next-button', function () {
        var id = $('.quiz:visible').data('id');
        var nextId = $('.quiz:visible').data('id') + 1;
        $('[data-id="' + id + '"]').hide();
        $('[data-id="' + nextId + '"]').show();

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
        $('[data-id="' + id + '"]').hide();
        $('[data-id="' + preId + '"]').show();
        $('.done-button').hide();
        $('.next-button').show();

        if (preId === 1) {
            $('.pre-button').hide();

        }
    });

    var userInputs = [];

    var allAnswers = [
        {
            "question": "Although the lunar landing ______, the crew managed to take some invaluable photos of the Moon's surface.",
            "answer": ["was abhorred", "was aborted", "was accomplished", "was abolished"],
            "correct": "was aborted",
            "id": 1
        },
        {
            "question": "If you ______ to see Mary, could you say hello to her for me.",
            "answer": ["likely", "possibly", "happen", "might"],
            "correct": "possibly",
            "id": 2
        },
        {
            "question": "I got a _____ box for my birthday.",
            "answer": ["white small wooden", "small white wooden", "small wooden white", "wooden small white"],
            "correct": "small white wooden",
            "id": 3
        },
        {
            "question": "All the surviors have been ______ for.",
            "answer": ["dealt", "accounted", "found", "reasoned"],
            "correct": "accounted",
            "id": 4
        },
        {
            "question": "My sister really gets a ____ out of singing in public.",
            "answer": ["fun", "buzz", "blush", "pleasure"],
            "correct": "buzz",
            "id": 5
        }
    ];
    getQuestion(allAnswers);

    //Show question
    function getQuestion(allAnswers) {
        var nId;

        if (allAnswers) { //check presence of allAnswer
            for (j = 0; j < allAnswers.length; j++) {
                nId = j + 1;
                $('.body-quiz').append(
                    "<div class='quiz " + (nId == 1 ? 'first' : '') + "' data-id='" + nId + "'>"
                    + "<div class='question'><h4>" + allAnswers[j].question + "</h4></div>"
                    + "<div class='radio'><input class='option' type='radio'  value='" + allAnswers[j].answer[0] + "'>" + allAnswers[j].answer[0] + "</div>"
                    + "<div class='radio'><input class='option' type='radio'  value='" + allAnswers[j].answer[1] + "'>" + allAnswers[j].answer[1] + "</div>"
                    + "<div class='radio'><input class='option' type='radio'  value='" + allAnswers[j].answer[2] + "'>" + allAnswers[j].answer[2] + "</div>"
                    + "<div class='radio'><input class='option' type='radio'  value='" + allAnswers[j].answer[3] + "'>" + allAnswers[j].answer[3] + "</div>"
                    + "</div>");
                if (j == 0) {

                }
                console.log(allAnswers[j].question);
                console.log(allAnswers[j].answer);
            }
        }
    }

    //Choice question and answer
    $(document).on('click', '.option', function () {
        var questionID = $(this).parents('.quiz').data('id');
        var answerID = $(this).attr('value');
        addUserInput(questionID, answerID);
    });

    //submit answer
    $(document).on('click', '.done-button', function () {
        compareArray(userInputs, allAnswers);
    });

    function addUserInput(question, answer) {
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

    //caculate score
    function compareArray(userInputs, allAnswers) {
        var score = 0;

        for (var x = 0; x < userInputs.length; x++) {
            for (var k = 0; k < allAnswers.length; k++) {

                if (userInputs[x].question == allAnswers[k].id) {
                    if (userInputs[x].answer == allAnswers[k].correct) {
                        console.log(allAnswers[k].correct);
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

        console.log(score);
    }
});


