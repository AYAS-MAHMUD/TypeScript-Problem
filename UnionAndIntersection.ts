// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.


interface Books{
  name : string,
  author : string,
  pages : number
}
interface Magazines{
  name : string,
  publicer : string,
  issueNumber : number
}

// type redingBook  = Books & Magazines;
type redingBook  = Books | Magazines;


const item1: redingBook = {
  name : "physics",
  author : "ayas",
  pages : 788,
  publicer : "riaz",
  issueNumber : 88
}
console.log(item1)