/*Exercise: Using everything you’ve learned up until this point, write a script that asks a user about the width, height, and length of a box, 
then calculate and return to the user the volume of this box.

As an example, a box with width = 20, height = 10, and length = 50 will have a volume of 10000 (omitting units, as they are not relevant in this
scenario). For now, assume that the values provided by the user are valid numbers, but if you have any ideas on how, you can try to make this 
script in such a way that it will be resistant to invalid values. */

let width = prompt("Welcome please introduce the width of your box");
let height = prompt ("Height");
let length = prompt ("Length");

if (isNaN(width) || isNaN(height) || isNaN(length)){
    alert("Invalid input");
    
}
else {
    alert ("The volume of the box is " + width * height * length);
}