$(document).ready(function () {
    $(document).on('click', '.start-button', function () {
        if (validateForm() == true) {
            $('.form-horizontal').submit();
        }
    });

    function validateForm() {
        var emptyQuestion = $('.text-question').val();
        var emptyAnswer1 = $('#answer1').val();
        var emptyAnswer2 = $('#answer2').val();
        var emptyAnswer3 = $('#answer3').val();
        var emptyAnswer4 = $('#answer4').val();
        var emptyRadio = $("input[name='radioanswer']:checked").val();

        if (emptyQuestion == "") {
            $('.error-message').show();
            return false;
        } else {
            $('.error-message').hide();
        }

        if (emptyAnswer1 == "") {
            $('.error-message1').show();
            return false;
        } else {
            $('.error-message1').hide();
        }

        if (emptyAnswer2 == "") {
            $('.error-message2').show();
            return false;
        } else {
            $('.error-message2').hide();
        }

        if (emptyAnswer3 == "") {
            $('.error-message3').show();
            return false;
        } else {
            $('.error-message3').hide();
        }

        if (emptyAnswer4 == "") {
            $('.error-message4').show();
            return false;
        } else {
            $('.error-message4').hide();
        }

        if (emptyRadio == undefined) {
            $('.checkbox').addClass('warning-message');
            return false;
        } else {
            $('.checkbox').addClass('success-message');
        }
        return (true);
    }
});