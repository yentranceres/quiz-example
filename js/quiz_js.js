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

    var correctAnswers = [
        {
            question: 1,
            answer: 'was aborted'
        },
        {
            question: 2,
            answer: 'possibly'
        },
        {
            question: 3,
            answer: 'small white wooden'
        },
        {
            question: 4,
            answer: 'accounted'
        },
        {
            question: 5,
            answer: 'buzz'
        }
    ];

    var userInputs = [];

    $(document).on('click', '.option', function () {
        var questionID = $(this).parents('.quiz').data('id');
        var answerID = $(this).attr('value');
        addUserInput(questionID, answerID);
    });

    $(document).on('click', '.done-button', function () {
        compareArray(userInputs, correctAnswers);
    });

    function addUserInput(question, answer) {
        var obj = {
            question: question,
            answer: answer
        };

        //check question has been stored ?????
        var index = null;

        for (var i = 0; i < correctAnswers.length; i++) {
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

    console.log('92', userInputs);

    function compareArray(userInputs, correctAnswers) {
        var score = 0;

        for (var x = 0; x < userInputs.length; x++) {
            for (var k = 0; k < correctAnswers.length; k++) {
                if (userInputs[x].question == correctAnswers[k].question) {
                    if (userInputs[x].answer == correctAnswers[k].answer) {
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

