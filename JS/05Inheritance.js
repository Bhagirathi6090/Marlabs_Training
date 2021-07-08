class Vehicle{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
}
class Bus extends Vehicle{
    constructor(name,id){
        super(name,id);
    }

    displayInfo(){
        console.log(this.name,this.id);
    }
}

let obj = new Bus("Volvo",123);
obj.displayInfo();