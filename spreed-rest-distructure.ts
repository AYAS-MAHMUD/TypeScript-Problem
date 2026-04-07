// Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.
// Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.


// Rest operation
const sum = (...rest:number[]):number=>{
    return rest.reduce((acc,num)=>acc+num,0)
}

const result = sum(1,2,3,4,5,6)
// console.log(result)


// Spreed operation
const array : number[] = [1,2,3,4,5,6,7];

const NewArray : number[] = [...array,8,9,10]
// console.log(NewArray)


// distructure
const [a,b,c,d,e] = array;
console.log(a,b,c,d,e)