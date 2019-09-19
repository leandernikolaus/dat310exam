

// a global variable holding the timer that is currently shown on main display.
var displaying

function Timer(title, time) {
    this.title = title;
    this.timeLeft = time;
    this.time = time;

    // display is the jQuery element, shown in aside
    // for this timer
    this.display = newTimeDisplay(this);

    // update is the function called when the timer is updated
    this.update = updateTimer;

    // this function displays this timer on main
    this.showAsMain = showAsMain;

    // this function removes the timer from aside
    this.removeDisplay = removeDisplay;
}

// create the DOM elements in aside, displaying timer
function newTimeDisplay(timer){
    var timeDisplay = $("<div></div>")
        .addClass("smalltimer")
        .html("<span class='timeLeft'>" + timeLeftToString(timer.timeLeft) +"</span>" 
        + "<span>"+ timer.title + "</span>");
    timeDisplay.click(function(){timer.showAsMain();});

    var aside = $("aside").append(timeDisplay);

    return timeDisplay;
}

// update the timeLeft dispayed in aside.
function updateTimeDisplay(timer){
    timer.display.children(".timeLeft").html(timeLeftToString(timer.timeLeft));
}

// 
function removeDisplay(){
    this.display.remove();
}

// converts remaining time (seconds) to MM:SS format with leading zeros
function timeLeftToString(timeLeft) {
    var m = Math.floor(timeLeft / 60);
    var s = timeLeft - 60 * m;
    // add leading zeros
    return ((m < 10) ? "0" : "") + m + ":" + ((s < 10) ? "0" : "") + s;
}

// updates the counter and the progress bar
function updateTimer() {
    this.timeLeft--;
    if (this == displaying) {
        $("#timer").html(timeLeftToString(this.timeLeft));
        $("#progressbar").attr("value", this.timeLeft);
    }
    updateTimeDisplay(this);

    if (this.timeLeft == 0) {
        clearInterval(this.timer);  // stop timer
    }
}

function showAsMain(){
    displaying = this;
    $("#showtitle").html(this.title);
    $("#timer").html(timeLeftToString(this.timeLeft));
    $("#progressbar").attr("max", this.time);
    $("#progressbar").attr("value", this.timeLeft);
    $("#countdown").show();
}

$(document).ready(function () {

    $("form[name='countdown_form']").submit(function(e){
        e.preventDefault();  // preventing the form from submission

        // get time left (in seconds)
        var timeLeft = $("#minutes").val() * 60;
        // get title from form
        var title = $("#title").val().toUpperCase();
        // create new timer
        var newTimer = new Timer(title, timeLeft);
        
        newTimer.showAsMain();

        // set timer on newTimer to update every second
        newTimer.timer = setInterval(function(){newTimer.update()}, 1000);
    });

});

function cancel() {
    $("#countdown").hide();
    clearInterval(displaying.timer);
    displaying.removeDisplay();
}