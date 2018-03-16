function adder(x) {
    return function(y) {
        return x + y
    };
}

var add2 = adder(2);
console.log(add2(3));
console.log(adder(5)(8));

// --------------------------

var car = {
    color: 'yellow'
}

function getCarColor(myCar) {
    return myCar.color;
}

console.log(getCarColor(car));

// --------------------------

function showOtherFuncion (func) {
    return func();
}

console.log(showOtherFuncion(function() {
    return 'Hi Im learning how to be a ninja on JS';
}))