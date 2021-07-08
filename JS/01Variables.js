//var
var myVal = "value"; //defining

function fun(params) {
    myVal = "new value"; //redefining
}

console.log(myVal);
fun();
console.log(myVal);

var myVal = "redeclaring value";
console.log(myVal);

//let (we can not redclare it)
let val = "let value";

function letFun(params) {
    val = "new let value";
}

console.log(val);
letFun();
console.log(val);
//let val = "redclare value";
//error we can not redclare it

//const (value can not be changed once declared)
const id = 123;
console.log(id);
//id = 234;