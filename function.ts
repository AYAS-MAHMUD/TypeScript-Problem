// Objective: Write a function that reverses a string.

const ReverseString = (value : string)=>{

  // console.log(nam.split("").reverse().join(""))
  let rev = "";
  for (let i= value.length-1 ;i>=0 ;i--){
    rev+=value[i]
  }
  
  console.log(rev)
}

ReverseString("ayas")
