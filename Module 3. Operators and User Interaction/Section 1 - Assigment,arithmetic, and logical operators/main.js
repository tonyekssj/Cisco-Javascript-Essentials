//Assignment operators
let year = 2050;
console.log("Year: ",year);
year = 2051;
let newYear = year;
console.log("Year and NewYear ",year,newYear);

//Arithmetic operators
console.log(2 + 2 * 2); 
console.log(2 + (2 * 2)); 
console.log((2 + 2) * 2);

const x = 5;
const y = 2;
 
console.log("addition: ", x + y); 
console.log("subtraction: ", x - y); 
console.log("multiplication: ", x * y); 
console.log("division: ", x / y); 
console.log("division remainder :", x % y); 
console.log("exponent: ", x ** y); 

//Unary arithmetic operators

let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
console.log(`${str} : ${typeof str}`); 
console.log(`${n1} : ${typeof n1}`); 
console.log(`${n2} : ${typeof n2}`); 
console.log(`${n3} : ${typeof n3}`); 
console.log(`${n4} : ${typeof n4}`); 

//Unary increment and decrement operators

let nn1 = 10;
let nn2 = 10;

console.log(nn1); 
console.log(nn1++); 
console.log(nn1); 

console.log(nn2); 
console.log(++nn2); 
console.log(nn2); 

let nn3 = 20;
let nn4 = 20;

console.log(nn3); 
console.log(nn3--); 
console.log(nn3); 

console.log(nn4); 
console.log(--nn4); 
console.log(nn4); 

console.log(0.2 + 0.1); 
console.log(0.2 * 0.1); 
console.log(0.3 / 0.1); 

//Compound Assignment Operators

let xx = 10;
xx += 2;
console.log(xx); 
xx -= 4;
console.log(xx); 
xx *= 3;
console.log(xx); 
xx /= 6;
console.log(xx);
xx **= 3;
console.log(xx); 
xx %= 10;
console.log(xx); 

// Logical Operators
//AND
console.log(true && true);
console.log(true && false); 
console.log(false && true); 
console.log(false && false); 

//OR
console.log(true || true); 
console.log(true || false); 
console.log(false || true); 
console.log(false || false); 

//NOT
console.log(!true); 
console.log(!false); 