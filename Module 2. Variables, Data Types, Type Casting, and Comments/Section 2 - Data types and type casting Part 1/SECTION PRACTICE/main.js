/*Question 1: Write a code that will create variables and initialize
 them with values of Boolean, Number, BigInt, String, and undefined 
 types using (when possible) literals and constructor functions.
 */

 let variableBool   =  false;
 let variableNum    =   10;
 let variableBigInt =   10n;
 let variableString =   "10";
 let variableUndefined  =   undefined;

 let variableBool_  =   Boolean(true);
 let variableNum_   =  Number(10);
 let variableBigInt_    =   BigInt(10);
 let variableString_    =   String ("10");

/* Question 2: Print all values and all types of those values using 
console.log. Try to use string interpolation to display the value and 
type at the same time with a single console.log call, e.g. in the 
following form: 1000 [number].
*/

console.log (`${variableBool}`,' [',typeof variableBool,']');
console.log (`${variableNum}`,' [',typeof variableNum,']');
console.log (`${variableBigInt}`,' [',typeof variableBigInt,']');
console.log (`${variableUndefined}`,' [',typeof variableUndefined,']');

/*Question 3: Carry out a chain of conversions: create a Boolean from
 a BigInt created from a Number that was created from a String. Start 
 with the value "1234". Is it possible? */

 let carryOut= String("1234");
 console.log("Primer paso String: " + carryOut ,typeof carryOut);
 let carryOutNumber= Number(carryOut);
 console.log("Conversion String --> Number: " +carryOutNumber,typeof carryOutNumber);
 let carryOutBigInt =BigInt(carryOutNumber);
 console.log("Conversion Number --> BigInt: "+ carryOutBigInt, typeof carryOutBigInt);
 let carryOutBoolean = Boolean(carryOutBigInt);
 console.log("Conversion BigInt --> Boolean: " + carryOutBoolean, typeof carryOutBoolean);

 //or 

 let carryOutSimple = Boolean( BigInt(Number("1234"))); 
 console.log(`${carryOutSimple} [${typeof carryOutSimple}]`);

 /* Question 4: Try adding two values of the same type and check the 
 result type. Try it for all primitive types. */

 console.log(variableBool + variableBool);
 console.log(variableNum + variableNum);
 console.log(variableBigInt + variableBigInt);
 console.log(variableString + variableString);
 console.log(variableUndefined + variableUndefined);

/*Question 5: Try adding two values of different types and check the 
results.*/

// Error por incompatibilidad console.log(variableNum + variableBigInt);
console.log(variableNum + variableBool);
console.log(variableNum + variableString);


/* Question 6: Try to modify the line const str1 = 42 + "1"; to get 
the result 43 (without removing the quotes around 1).*/

//const str1 = 42 + Number("1");
const str1 = 42 + +"1"
console.log("Expected Result [43]: ",str1)