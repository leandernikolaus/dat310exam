function addToCount(){
    var id = $(this).attr("for");
    var countTableData = $("#count-"+id);
    var count = parseInt(countTableData.html()) + 1;
    var name = $("#name-"+id).html();
    countTableData.html(count);
    updateCartItemCount(name, count);
}

function remFromCount(){
    var id = $(this).attr("for");
    var countTableData = $("#count-"+id);
    var count = parseInt(countTableData.html()) - 1;
    var name = $("#name-"+id).html();

    if (count > 0) {
        countTableData.html(count);
    } else {
        $("#row-"+id).remove();
    }
    updateCartItemCount(name, count);
}

function updateCartItemCount(id, count){
    $.get("/cart/" + id + "/" + count);
}

$(document).ready(function(){
    $(".add").each(function(){$(this).click(addToCount)});
    $(".rem").each(function(){$(this).click(remFromCount)});   
    $(".close").each(function(){$(this).click(
        function(){
            $(this).parent().remove();
        }    
    )}); 
});

