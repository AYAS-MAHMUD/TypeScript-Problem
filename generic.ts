
// Task 13: Generics with Functions and Interfaces
// Objective: Use generics to handle different types.

// Instructions:

// Create a generic function that:
// Accepts an array of any type.
// Returns a new array with duplicate values removed.


{

//
const generic = <T>(...rest : T[]) : T[]=>{
    // console.log(rest)
    return [...new Set(rest)]

}

const result = generic<any>(1,2,2,2,"ayas",true,"riaz")
console.log(result)

//

}