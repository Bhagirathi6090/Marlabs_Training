var isRunning = true;

var status = (isRunning === true) ? "Yes" : "No";
console.log(status);

var status2 = (isRunning == "true") ? "Yes" : "No";
console.log(status2);

console.log("true" == "true"); //compared by ref
console.log("true" === "true");//compared using data
console.log("true" === true);//compared using data

//falsy value --- undefined, null, NaN, '', false, 0
const lastStatus = null;

const statusU = lastStatus || 'Pending';
console.log(statusU);

//////
