// Problem 6:
// Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

// Interface & Function Signature:

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length === 0){
        return null
    }
    let maxPrice = products[0].price
    let maxProduct = products[0]
    for(let i=1; i<products.length; i++){
        if(products[i].price > maxPrice){
            // maxPrice = products[i].price
            maxProduct = products[i]
        }
    }
    return maxProduct
    
}


const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

const w = getMostExpensiveProduct(products);  
// Output: { name: "Bag", price: 50 }
console.log(w)