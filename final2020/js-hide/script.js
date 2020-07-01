

function showPad(show){
    value = "hidden";
    if (show){
        value = "visible";
    }
    document.querySelector("#padinstruction").style.visibility = value;
    document.querySelectorAll("#pad .number").forEach(
        function(element){
            element.style.visibility = value;
        });
}

function hide(){
    showPad(false);
}

function show(){
    showPad(true);
}