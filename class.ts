class Animal{       // Class
    // name : string;
    // sound : string;
    // age : number;
    
    /*
     * Parameter Propertise -> public name : string
     */
    constructor (public name : string,public sound:string, public age : number){      
    //     this.name  = name;
    //     this.sound = sound;
    //     this.age = age;
    }
    makeSound(){   // Method
        console.log(`Name : ${this.name} , Sound : ${this.sound} , Age : ${this.age} `)
    }

}

const d1 = new Animal("Nesu","Gew Gew",7);      // Object
const d2 = new Animal("Jawra","miaw Gew",7);
const d3 = new Animal("Fardin","Gew Gew",7);

d1.makeSound()
d2.makeSound()
d3.makeSound()