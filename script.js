var guesses = [];
var allSpans;
let slash = document.createElement('span');
slash.innerText = ' / ';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

$(document).ready(function() {
    const number = Math.floor(Math.random() * 100 + 1)
    $('#input').keydown(function(e) {
        if(e.which === 13) {
            e.preventDefault();
            $('#submit').click();
        }
    });

    $(document).keyup(function(e) {
        if(e.shiftKey && e.key === "R") {
            $('#reset').click();
        }
    });

    $('#reset').click(function() {
        if ($("#input").is(":disabled")) {
            location.reload();
        } else {
            if (confirm("Are you sure that you want to reset the game?")) {
                location.reload();
            } 
        }
    });

    $('#submit').click(function() {
        let guessNum = $('#input').val();
        if(($('#input').val() < number) && ($('#input').val() > 0)) {
            guesses.push($('#input').val());
            $("#results").removeClass('high error').addClass('low').text("Your guess was too low! Try again.")
            $("<span class='low'> " + guessNum + " /</span>").appendTo($('#user2'));
            $('#results').append($('span.high').val()).append(' ');
            $("#main").removeClass('regback highback errorback').addClass('lowback');
            $("#submit").removeClass('btnbackerror btnbackhigh').addClass('btnbacklow');
            $("#reset").removeClass('btnbackerror btnbackhigh').addClass('btnbacklow');
        } else if (($("#input").val() > number) && ($("#input").val() > 0) && ($("#input").val() < 101)) {
            guesses.push($("#input").val());
            $("#results").removeClass('low error').addClass('high').text("Your guess was too high! Try again.");
            $("<span class='high'> " + guessNum + " /</span>").appendTo($('#user2'));            
            $('#results').append($('span.high').val()).append(' ');
            $('#main').removeClass('regback lowback errorback').addClass('highback');
            $('#submit').removeClass('btnbackerror btnbacklow').addClass('btnbackhigh');
            $('#reset').removeClass('btnbackerror btnbacklow').addClass('btnbackhigh');
        } else if (($('#input').val() == number)) {
            guesses.push($('#input').val());
            $("#results").removeClass('low high error').addClass('green').text("You win!");
            $('span').each(function() {
                $('span').removeClass('low high');
            })
            $("<span class='green'> " + guessNum + "</span>").appendTo($('#user2'));            
            $("#user2").addClass('green');
            $("#input").prop("disabled", true);
            $("#main").removeClass('regback errorback lowback highback').addClass('winback');
            $("#submit").removeClass('btnbackerror btnbacklow btnbackhigh').addClass('btnbackwin');
            $("#reset").removeClass('btnbackerror btnbacklow btnbackhigh').addClass('btnbackwin');
        } else if ($('#input').val() <= 0 || $('#input').val() > 100 || $('#input').val() === '' || $("#input").val() != (/\d+/ig) || !$("#input").val() || $("#input").val().length === 0) {
            $('#results').text("Please enter a number from 1 - 100.").addClass('error').removeClass('low high')
            $('#main').removeClass('regback lowback highback').addClass('errorback');
            $('#submit').removeClass('btnbacklow btnbackhigh submit').addClass('btnbackerror');
            $('#reset').removeClass('btnbacklow btnbackhigh reset').addClass('btnbackerror');
        }
        const space = "";
        $('#input').val('');
        $('#user').appendTo($('#user2'));
        unique = guesses.filter(onlyUnique);
        counting.textContent = "Guesses: " + unique.length;
    });
})