function addToCount(){
    var id = $(this).attr("for");
    var countTableData = $("#count-"+id);
    var count = parseInt(countTableData.html()) + 1;
    countTableData.html(count);
    updateCartItemCount(id, count);
}

function remFromCount(){
    var id = $(this).attr("for");
    var countTableData = $("#count-"+id);
    var count = parseInt(countTableData.html()) - 1;
    
    if (count > 0) {
        countTableData.html(count);
    } else {
        $("#row-"+id).remove();
    }
    updateCartItemCount(id, count);
}

function updateCartItemCount(id, count){
    $("#input-"+ id).val(count);
    // $.get("/cart/" + id + "/" + count);
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

