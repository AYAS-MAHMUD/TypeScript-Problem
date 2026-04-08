// Problem 5:
// Description: Write a function that takes a string | number and returns:

// The length if it's a string
// The number multiplied by 2 if it's a number
// Function Signature:

// function processValue(value: string | number): number
// Example:


function processValue(value: string | number): number{
    if(typeof value ==="string"){
        return value.length
    }else{
        return value*2
    }
    // console.log(typeof value)
}
const b = processValue("hello"); // Output: 5
const c = processValue(10);      // Output: 20
console.log(b , c)