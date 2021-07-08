function printN() {
    if(arguments.length == 0)
        console.log("no value passed");
    else
      arguments.forEach(number => console.log(number));
}

printN();
printN(1,2);
printN(1,2,3,4);