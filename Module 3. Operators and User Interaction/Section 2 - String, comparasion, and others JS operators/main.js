//String oprators
let greetings = "Hi";
console.log(greetings + " " + "Alice"); 
let sentence = "Happy New Year ";
let newSentence = sentence + 10191;
console.log(newSentence); 
console.log(typeof newSentence); 

//Compound Assignment Operators
let sentenceCO = "Happy New ";
sentenceCO += "Year ";
sentenceCO += 10191;
console.log(sentenceCO); // -> Happy New Year 10191

//Comparison operators

console.log(10 === 5); 
console.log(10 === 10); 
console.log(10 === 10n); 
console.log(10 === "10"); 
console.log("10" === "10"); 
console.log("Alice" === "Bob"); 
console.log(0 === false); 
console.log(undefined === false); 

console.log(10 == 5); 
console.log(10 == 10); 
console.log(10 == 10n);
console.log(10 == "10");
console.log("10" == "10"); 
console.log("Alice" == "Bob"); 
console.log(0 == false); 
console.log(undefined == false); 
console.log(NaN == NaN); 

console.log(10 !== 5); 
console.log(10 !== 10); 
console.log(10 !== 10n); 
console.log(10 !== "10"); 
console.log("10" !== "10"); 
console.log("Alice" !== "Bob"); 
console.log(0 !== false); 
console.log(undefined !== false); 
console.log(10 != 5); 
console.log(10 != 10); 
console.log(10 != 10n); 
console.log(10 != "10"); 
console.log("10" != "10"); 
console.log("Alice" != "Bob"); 
console.log(0 !=  false); 
console.log(undefined != false); 
console.log(NaN != NaN); 

console.log(10 > 100); 
console.log(101 > 100); 
console.log(101 > "100"); 
 
console.log(101 < 100); 
console.log(100n < 102); 
console.log("10" < 20n); 
 
console.log(101 <= 100);
console.log(10 >= 10n); 
console.log("10" <=  20); 

//Other operators

//typeof
let year = 10191;
console.log(typeof year); 
console.log(typeof false); 

//instanceof
let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); 
console.log(name instanceof Array); 

//ternary
let number = 1 > 2 ? "Alice" : "Bob";
console.log(number); // -> Bob

//delete
let user = {
    name: "Alice",
    age: 38
};
console.log(user.age); 
delete user.age;
console.log(user.age);

//Precedence
let a = 10;
let b = a + 2 * 3;
let c = a + 2 < 20 - 15;
console.log(a); 
console.log(b); 
console.log(c); 

