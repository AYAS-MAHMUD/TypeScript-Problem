// Objective: Create a function with parameters and an optional literal type.
// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')

type literal= "admin" | "user" | "guest"

function OptionalAndLiterel (name : string, age:number , role : literal){
    console.log("Name : " , name);
    console.log("Age : " , age);
    console.log("Role : ",role)

}

OptionalAndLiterel("Ayas",20,"guest")