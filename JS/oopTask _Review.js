/*
    Consider keeping all objects in single array and use Array filter for finding match.
*/
class GroceryInventory{

    constructor(){
        this.data = [
        {category : "fruits", name:"Apple"  },
        { category : "fruits", name:"Orange"  },
        { category : "fruits", name:"Pineapple"  },
        { category : "fruits", name:"Plum"  },
        { category : "fruits", name:"Strawberry"  },
        { category : "fruits", name:"Banana"  },
        { category : "fruits", name:"kiwi"  },
        { category : "vegetables", name:"Carrot"  },
        { category : "vegetables", name:"Tomato"  },
        { category : "vegetables", name:"Spinach"  },
        { category : "vegetables", name:"Pumpkin"  },
        { category : "vegetables", name:"Radish"  },
        { category : "vegetables", name:"Cucumber"  },
        { category : "pulses", name:"Brinjal"  },
        { category : "pulses", name:"Carrot"  },
        { category : "pulses", name:"Tomato"  },
        { category : "pulses", name:"Spinach"  },
        { category : "pulses", name:"Pumpkin"  },
        { category : "pulses", name:"Radish"  },
        { category : "pulses", name:"Cucumber"  },
        { category : "pulses", name:"Brinjal"  },
        ]
    }
    
    getFruits(numItem=0){
        this.displayItems(numItem,function(item){
        return item.category=="fruits";
        });
    }

    getVegetables(numItem=0){
        this.displayItems(numItem,function(item){
            return item.category=="vegetables";
        });
    }

    getPulses(numItem=0){
        this.displayItems(numItem,function(item){
            return item.category=="pulses";
        });
    }

    getFruitsAndVegies(numItem=0){
        let vegAndFru = this.data.filter(ele=> ele.category=="vegetables" || ele.category=="fruits");
        if(numItem==0){
            vegAndFru.forEach(item => console.log(`${item.name}`));
        }else{
            if(numItem>vegAndFru.length){
                numItem = vegAndFru.length;
                console.log("Warning : Item number greater than total number!");
            }
            vegAndFru.slice(0,numItem*2).forEach(item => console.log(`${item.name}`));
        }
    }

    displayItems(index,test){
        let allFruits = this.data.filter(test); //appliying filter
        if(index==0){
            allFruits.forEach(item => console.log(`${item.name}`));
        }else{
                if(index>allFruits.length){
                    index = allFruits.length;
                    console.log("Warning : Item number greater than total number!");
                }
            
            allFruits.slice(0,index).forEach(item => console.log(`${item.name}`));
            console.log("Showing %d of %d",index,allFruits.length);
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
     let removeItem = this.data.indexOf(itemName);
     console.log(removeItem);
    // Explore : methods of deleting using splice and delete keyword
        fruits.splice(removeItem,1);
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

 //obj1.getFruitsAndVegies();
//  obj1.getFruitsAndVegies(4);

//  obj1.addItem("fruits","Grapes");
//  obj1.getFruits();
// obj1.addItem("None","None");
// obj1.getFruits();

 obj1.removeItem("Fruits","Banana");
 obj1.getFruits();

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