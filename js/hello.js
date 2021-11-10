const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// PRODUCTS.forEach((product, index, array) => array[index] = product + " 111" )
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}` )  // toUpperCase
console.log(PRODUCTS)