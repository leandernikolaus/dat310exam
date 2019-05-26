/**
 * Exercise #9: Countdown timer
 */

var timeLeft = -1;  // global variable, stores time left (in seconds)
var myTimer;  // holds the ID returned by setInterval
var title;

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
        title = title.toUpperCase();
        alert(title);
        clearInterval(myTimer);  // stop timer
    }
}

function stop() {
    clearInterval(myTimer);
    $("#stopButton").hide();
    $("#startButton").show();
}

function start() {
    $("#stopButton").show();
    $("#startButton").hide();
    myTimer = setInterval(updateTimer, 1000);
}

function cancel() {
    $("form[name='countdown_form']").show();
    $("#countdown").hide();
    clearInterval(myTimer);
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
        start();
    });

});