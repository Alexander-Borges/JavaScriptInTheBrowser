function counter() {
    for(var num = 0; num <= 5; num++)
    console.log(num)
}

//Calling or Invoking a Function
counter()

// Adding Parameters
function counter(startNum) { //the function is expection some PARAMETER in order to run
    for (var num = startNum ; num >= 0 ; num --) {
        console.log(num);
    }
    console.log("")
}

counter(6);
counter(3);
counter(1);

// Returning vs Console logging
function createArray(num) {
    var newArray = [];
    for (var i = 0; i <= num; i++) {
        newArray.push(i);
    }
    return newArray
}
var y = createArray(5);
console.log(y)