class myclass {
    constructor(name){
    this.name = name
    }
    sayMyNme(){
    console.log( this.name); 
    }  
}
    
let obj1 = new myclass("Nikhil");
obj1.sayMyNme();

//////////
// class myClass {

//     myClass( name ){
    
//     this.name = name;
//     }
    
//     sayMyname = function() {
    
//     return name;
//     }
//     }
    
//     let obj1 = new myClass("Nikhil");
    
//     console.log(obj1.sayMyname());