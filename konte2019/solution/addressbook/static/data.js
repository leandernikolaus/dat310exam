contacts = new Array();

function getEntries(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText);
            contacts = new Array();
            for (var i=0; i< result.length; i++) {
                console.log(result[i]);
                contacts.push(new Entry(result[i].name, result[i].tel, result[i].email));
            }
            displayEntries();
        }
    };
    xhr.open("GET", "/contacts", true);
    xhr.send(null);
}

function setEntries(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("did finish with result.");
            console.log(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("POST", "/contacts", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("contacts=" + JSON.stringify(contacts));
    
}


