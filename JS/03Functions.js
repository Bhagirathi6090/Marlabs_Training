//parameterized function
function fun(params) {
    var val = params && params.someVal;
    console.log(val);
}

fun("hello,world");
fun();

/////////
function eligible(age){
    return age>=18;
}
console.log(eligible(17) ? "Yes":"No");

////////
const mul = function(a,b){return a*b;}
console.log(mul(10,2));

////////self invoking functions
( function (){
        console.log("Self invoked");
    }
)();
