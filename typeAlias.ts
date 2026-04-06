// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.
// Instructions:
// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.


// solution : 

type Alias = {  // It's called type Alias
  name: string;
  Address: string;
  Hair: string;
  Eye: string;
  Income: number;
  Hobbies: string;
  FamilyMember: number;
  Job: string;
  MeritalStatus: boolean;
};

const Person: Alias = {
  name: "ayas",
  Address: "Cox'sBazar",
  Hair: "Black",
  Eye: "Brown",
  Income: 10,
  Hobbies: "Driver",
  FamilyMember: 5,
  Job: "No job",
  MeritalStatus: false,
};

console.log(Person)