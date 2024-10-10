var values = [1, 65, 37, 75, 5, 3000, 7, 50, 9, 23];

document.getElementById("value").innerHTML = "" + values.sort();
document.write(values.reverse());

function acendingOrder() {
    values.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("ascendingOrder").innerHTML = values;
}

function descendingOrder() {
    values.sort(function (a, b) {
        return b - a;
    });
    document.getElementById("descendingOrder").innerHTML = values;
}

//multiply ten
var numbers = [23, 45, 67, 89, 36];
var x = 0;
function multiplyTen(x) {
    return x * 10;
}
newArray = numbers.map(multiplyTen);
document.getElementById("map").innerHTML = newArray;

//add 15 on button click
var y = 0;
function addFifteen(y) {
    return y + 15;
}
newArray2 = numbers.map(addFifteen);
document.getElementById("add15").innerHTML = newArray2;
