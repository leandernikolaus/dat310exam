let numbers = [];

let status = "idle";
let tipping = 0;

// random returns a random integer between 1 and 9
function random(){
    return Math.floor(Math.random()*9)+1;
}



function start(){
    if (status != "idle"){
        return;
    }
    hideForm();

    createNumbers();
    createNumberFields()
    status= "showing";
    
    setTimeout(showNumbers, 1000);
    setTimeout(hideNumbers, 1500);
    setTimeout(startAnswers, 2000);
}

function createNumbers(){
    let howmany = document.getElementById("count").value;
    numbers = [];
    for (let i=0; i< howmany; i++){
        numbers.push(random());
    }
}

function createNumberFields(){
    let box = document.getElementById("numberbox");
    box.innerHTML = "";
    for (let i=0; i< numbers.length; i++){
        let number = document.createElement("div");
        number.classList.add("number");
        box.appendChild(number);
    }
}

function showNumbers(){
    let numberelements = document.querySelectorAll("div.number");
    if (numbers.length != numberelements.length){
        // something is wrong.
        reset();
    }
    for (let i=0; i < numbers.length; i++){
        numberelements[i].innerText = numbers[i];
    }
}

function hideNumbers(){
    let numbers = document.querySelectorAll("div.number");
    numbers.forEach(function(element){
        element.innerText="";
    });
}

function startAnswers(){
    status = "answer";
}

function tipp(i){
    if (status != "answer"){
        return;
    }
    if (numbers.length <= tipping){
        reset();
        return;
    }

    if (i === numbers[tipping]){
        // success:
        let numberels = document.querySelectorAll("div.number");
        numberels[tipping].innerText = i;

        tipping++;
        // check if we are done
        if (tipping == numbers.length){
            alert("Congratulation! Play again?");
            reset();
        }
    }
    else {
        let numberels = document.querySelectorAll("div.number");
        numberels[tipping].innerText = numbers[tipping];
        numberels[tipping].classList.add("error");
        alert("Sorry, try again!");
        reset();
    }
}

function reset(){
    status = "idle";
    tipping = 0;
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