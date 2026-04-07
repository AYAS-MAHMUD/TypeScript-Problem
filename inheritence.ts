class Teacher {
    name : string;
    age : number;
    country : string;
    designation : string;
    isMarried : boolean;

    constructor (name : string, age : number , country : string , designation : string , isMarried : boolean){
        this.name = name,
        this.age = age ,
        this.country = country,
        this.designation = designation,
        this.isMarried = isMarried
    }
    ViewTeacher(){
        console.log(`Name : ${this.name} , Age : ${this.age} , Country : ${this.country} , Designation : ${this.designation} , isMarried : ${this.isMarried}`);
    }
}

class Students extends Teacher{
    registration : number;
    constructor(name : string, age:number, country : string , designation : string , isMarried : boolean,registration : number){
        super(name,age,country,designation,isMarried);

        this.name  = name,
        this.age = age,
        this.country = country,
        this.designation = designation,
        this.isMarried = isMarried,
        this.registration = registration
    }
    ViewStudent(){
        console.log(`Name : ${this.name} , Age : ${this.age} , Country : ${this.country} , Designation : ${this.designation} , isMarried : ${this.isMarried} , Registration : ${this.registration}`);
    }
}


// const t1 = new Teacher("Ali sir",28,"Bangladesh","Senior Teacher",true)
const s1 = new Students("Ayas",20,"Banlga","student",false,94844944)

s1.ViewStudent()