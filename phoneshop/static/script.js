function addToCount(){
    var id = this.getAttribute("for");
    var countTableData = document.getElementById("count-"+id);
    var count = parseInt(countTableData.innerHTML) + 1;
    var name = document.getElementById("name-"+id).innerHTML;
    countTableData.innerHTML = count;
    updateCartItemCount(name, count);
}

function remFromCount(){
    var id = this.getAttribute("for");
    var countTableData = document.getElementById("count-"+id);
    var count = parseInt(countTableData.innerHTML) - 1;
    var name = document.getElementById("name-"+id).innerHTML;

    if (count > 0) {
        countTableData.innerHTML = count;
    } else {
        var countRow = document.getElementById("row-"+id);
        countRow.parentElement.removeChild(countRow);
    }
    updateCartItemCount(name, count);
}

function updateCartItemCount(id, count){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/cart/" + id + "/" + count, true);
    xhr.send(null);
}

window.onload = function(){
    var addButtons = document.getElementsByClassName("add");
    for (var index = 0; index < addButtons.length; index++) {
        addButtons[index].onclick = addToCount;
    }

    var remButtons = document.getElementsByClassName("rem");
    for (var index = 0; index < remButtons.length; index++) {
        remButtons[index].onclick = remFromCount;
    }
    
}

