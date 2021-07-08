//Storing 3 categories values brute-force approach taking 3 array
//optimised way using HashMap to store entry as key,value
let fruits = ["Apple","Orange","Pineapple","Plum","Strawbery","Banana","Kiwi"];
let vegetables = ["Carrot","Tomato","Spinach","Pumpkin","Radish","Cucumber"];
let pulses = ["Brinjal","Carrot","Tomato","Spinach","Pumpkin","Radish","Cucumber"];

class GroceryInventory{
    //returns fruits based on passed argument
    getFruits(){
        if(arguments.length == 0)
           fruits.forEach(ele => console.log(ele));
        else
            for (let i = 0; i <arguments[0]; i++) {
                console.log(fruits[i]);
            }
    }

    //returns vegetables based on passed argument
    getVegetables(){
     if(arguments.length == 0)
        vegetables.forEach(ele => console.log(ele));
     else
         for (let i = 0; i <arguments[0]; i++) {
             console.log(vegetables[i]);
         }
    }

    //returns pulses based on passed argument
    getPulses(){
     if(arguments.length == 0)
        pulses.forEach(ele => console.log(ele));
     else
         for (let i = 0; i <arguments[0]; i++) {
             console.log(pulses[i]);
         }
    }

    //returns fruits and vegies based on passed argument
    getFruitsandVegies(){
     if(arguments.length == 0){
        fruits.forEach(ele => console.log(ele));
        vegetables.forEach(ele => console.log(ele));
     }
     else{
         for (let i = 0; i <arguments[0]; i++) {
             console.log(fruits[i]);  
         }
         for (let i = 0; i <arguments[0]; i++) {
            console.log(vegetables[i]); 
         }
        }
    }

    //for adding item
    addItem(itemCategory, itemName){
        if(itemCategory.toUpperCase() === "Fruits".toUpperCase())
            fruits.push(itemName);
         else if(itemCategory.toUpperCase() === "Vegetables".toUpperCase())
            vegetables.push(itemName);
         else if(itemCategory.toUpperCase() === "Pulses".toUpperCase())
            pulses.push(itemName);
         else
            console.log("Category does not exist");
    }

    //for removing specific item from array
    removeItem(itemCategory, itemName){
    if(itemCategory.toUpperCase() === "Fruits".toUpperCase()){
        let nArr = fruits.filter( ele => ele!=itemName);
        fruits = nArr;
    }else if(itemCategory.toUpperCase() === "Vegetables".toUpperCase()){
        let nArr = vegetables.filter( ele => ele!=itemName);
        vegetables = nArr;
    }else if(itemCategory.toUpperCase() === "Pulses".toUpperCase()){
        let nArr = pulses.filter( ele => ele!=itemName);
        pulses = nArr;
     }else
        console.log("Category does not exist");
    }
}

let obj1 = new GroceryInventory();
//////Test Cases//////////////
// obj1.getFruits();
// obj1.getFruits(3);

// obj1.getVegetables();
// obj1.getVegetables(4);

// obj1.getPulses();
// obj1.getPulses(4);

// obj1.getFruitsandVegies();
// obj1.getFruitsandVegies(4);

// obj1.addItem("fruits","Grapes");
// obj1.addItem("None","None");
// obj1.getFruits();

// obj1.removeItem("Fruits","Banana");
// obj1.getFruits();

// obj1.removeItem("Fruits","Plum");
// obj1.getFruits();

// obj1.removeItem("Vegetables","Pumpkin");
// obj1.getVegetables();

// obj1.removeItem("Vegetables","Cucumber");
// obj1.getVegetables();

// obj1.removeItem("Pulses","Brinjal");
// obj1.getPulses();

// obj1.removeItem("Pulses","Radish");
// obj1.getPulses();

//obj1.removeItem("Test","None");