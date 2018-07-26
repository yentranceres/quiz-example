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


    /* var correctAnswer = ['was aborted', 'possibly', 'small white wooden', 'accounted', 'buzz'];
     var userAnswer = [];

     $(document).on('click', '.option', function () {
         var choice = $(this).attr('value');
             userAnswer.push(choice);
         console.log(userAnswer)
     });*/
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


        if (index !== null) {
            userInputs[index] = obj;
            console.log('abc', index);
        } else {
            userInputs.push(obj);
        }
    }
console.log(userInputs);
        function compareAnswers(correctAnswers, userInputs) {

    }
});