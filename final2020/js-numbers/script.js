let numbers = [];

// random returns a random integer between 1 and 9
function random(){
    return Math.floor(Math.random()*9)+1;
}



function start(){
    hideForm();

    // HINTS: 
    // get the value of the count input
    // create count many random numbers and add them to the global array
    // after 1 seconds show the numbers (create appropriate html elements)
    // after 1.5 seconds hide the numbers again

}

function tipp(i){

    // HINTS:
    // check if i is equal to the next number
    // if correct show the number 
    //    if finished, alert and call showForm
    // if false
    //    alert and call showForm

    showForm();
}

function showForm(){
    document.getElementById("theForm").style.display = "block";
    document.getElementById("numberbox").style.display = "none";
    document.getElementById("padbox").style.display = "none";
}

function hideForm(){
    document.getElementById("theForm").style.display = "none";
    document.getElementById("numberbox").style.display = "flex";
    document.getElementById("padbox").style.display = "block";
}

window.onload= showForm;