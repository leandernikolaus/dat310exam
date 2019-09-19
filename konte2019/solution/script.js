

// function bar() {}

// function foo() {}

// mydiv = document.getElementById("thediv");

// mydiv.addEventListener("click", bar);
// mydiv.addEventListener("click", foo);


function plusOne(number) {
    return number + 1;
}

function addOne(myfunc, number) {
    return myfunc(number) + 1;
}

var number = addOne(function(){
                        return plusOne(1);
                    }, plusOne(0));
console.log(number);