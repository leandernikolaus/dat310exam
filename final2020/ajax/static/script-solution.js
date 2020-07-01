async function role(){
    let resultEl = document.getElementById("result");
    if (resultEl.classList.contains("waiting")){
        return;
    }
    resultEl.innerText ="";
    resultEl.classList.add("waiting")


    let reply = await fetch("/random");
    if (reply.status == 200){
        let number = await reply.text();
        // resultEl.innerText = number;
        // resultEl.classList.remove("waiting");
    }
}