/**
 * Countdown timer
 * TODO:
 * * Get and display title in capital letters
 * * Add functionality to stop/restart and cancel timer
 * * When the timer finishes, alert the user, displaying the title
 */



var timeLeft = -1;  // global variable, stores time left (in seconds)
var myTimer;  // holds the ID returned by setInterval

// converts remaining time (seconds) to MM:SS format with leading zeros
function timeLeftToString() {
    var m = Math.floor(timeLeft / 60);
    var s = timeLeft - 60 * m;
    // add leading zeros
    return ((m < 10) ? "0" : "") + m + ":" + ((s < 10) ? "0" : "") + s;
}

// updates the counter and the progress bar
function updateTimer() {
    timeLeft--;
    $("#timer").html(timeLeftToString());
    $("#progressbar").attr("value", timeLeft);

    if (timeLeft == 0) {
        clearInterval(myTimer);  // stop timer
    }
}

$(document).ready(function () {

    $("form[name='countdown_form']").submit(function(e) {

        e.preventDefault();  // preventing the form from submission

        // set time left (seconds)
        timeLeft = $("#minutes").val() * 60;
        title = $("#title").val().toUpperCase();
        console.log(title);
        $("#showtitle").html(title);

        $(this).hide();  // hide form
        // initialize timer and progress bar, then show them
        $("#timer").html(timeLeftToString());
        $("#progressbar").attr("max", timeLeft);
        $("#progressbar").attr("value", timeLeft);
        $("#countdown").show();

        // update the timer in every second
        myTimer = setInterval(updateTimer, 1000);
    });

});