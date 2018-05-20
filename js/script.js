$(document).ready(function() {

    $(".eye").click(function() {
        $(".intro").fadeOut();
        $("#2").fadeOut();
        $("#3").fadeOut();

        setTimeout(function() {
            $("#1").fadeIn();
        }, 500);
    });


    $(".tremor").click(function() {

        $("#1").fadeOut();
        $("#3").fadeOut();
        $(".intro").fadeOut();

        setTimeout(function() {
            $("#2").fadeIn();
        }, 500);

    });


    $(".pain").click(function() {

        $("#1").fadeOut();
        $("#2").fadeOut();
        $(".intro").fadeOut();

        setTimeout(function() {
            $("#3").fadeIn();
        }, 500);
    });


    // when submit button clicked
    $('#quiz-submit').on('click', function() {

        // create score var
        var score = 0;

        // loop through each question
        $('.question').each(function() {

            // remove the quiz-msg div
            $('.quiz-msg', this).remove();

            var correct = $(this).find(':checked[data-correct]').length;
            console.log(correct);

            // check answer
            if (correct == 1) {
                // correcto!
                //alert("correct!");
                var msgHTML = '<div class="quiz-msg correct">Muy bien. &#161;Correcto!</div>';
                $(this).append(msgHTML);

                // Add 1 to the score
                score++;

            } else {
                var msgHTML = '<div class="quiz-msg incorrect">&#161;Incorrecto!</div>';
                $(this).append(msgHTML);

                // find the correct radio button and add class
                var correctRadio = $(this).find('input[data-correct]');
                var correctRadioLabel = correctRadio.parent();
                correctRadioLabel.addClass('correct');

            }

        });

        // output score
        $('#score').text(score);

    });

});