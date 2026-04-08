// Problem 4:
// Description:

// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.
// Example:
// const myCar = new Car("Toyota", 2020, "Corolla");

// myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
// myCar.getModel();  // Output: "Model: Corolla"


class Car{
    name : string;
    year : number;
    model : string;
    constructor(name : string , year : number , model : string){
        this.name = name,
        this.year = year,
        this.model = model
    }

    getInfo(){
        console.log(`Make : ${this.name} , Year : ${this.year}`)
    }
    getModel(){
        console.log(`Model : ${this.model}`)
    }
}


const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();