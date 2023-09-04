//Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.

for(let i=100; i > 0; i=i-10){
    console.log(i);
}

/*Exercise 2: Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0
(hint: use the prompt dialog).
Check if the entered values are correct (that the initial value is greater than the final value).*/

let firstNumber=prompt(`Enter the first number >0 <100`);
let lastNumber=prompt(`Enter the last number >0 <100`);

if( (firstNumber > 100 || lastNumber > 100) || (firstNumber < 0 || lastNumber < 0) || (firstNumber<lastNumber) ){
    alert(`Invalid numbers`);
}

else{
    for (let i = firstNumber; i>lastNumber; i=i-10){
        console.log(i);
    }
}


/*Exercise 3: There are ten different numbers in the following numbers array:

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

Write a program that first writes out all these numbers on the console, then only those that are even (hint: the remainder of dividing
an even number by 2 is equal to 0), then only those that are larger than 10 and at the same time smaller than 60.*/

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (let n of numbers){
    console.log(`Numbers ${n}`);
}

for (let n of numbers){
    if(n%2 == 0 ){
        console.log(`Even numbers ${n}`);  
    }
}

for (let n of numbers){
    if(n > 10 && n < 60){
        console.log(`Numbers larger than 10 and smaller than 60 ${n}`);
    }
}

/*Exercise 4: Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com
(second prompt). The program will allow you to enter as many movies as you want into the movies array. Each element of the array will be an
object, consisting of two fields: title and imdb. The input is completed if the user presses Cancel in the prompt dialog. Then the program 
should first print out to the console all movies that have a rating of less than 7, then those whose rating is greater than or equal to 7. 
Write the name of the movie and its rating next to each other, e.g.:*/

let movies=[];


while(1){
    movie=prompt("Enter the movies name");
    rating=prompt("Enter the ranting of the movie");


    if (movie === null || rating === null){
        alert("Inavlid input"); 
        break 
    }
    
    else{
        movies.push({
            tittle: movie,
            rating: Number(rating)
        });
    }
}

console.log("Movie under 7:");
for (let movie of movies){
    if(movie.rating < 7){
        console.log(`Name movie ${movie.tittle} (${movie.rating})`);
    }
}

console.log("Movie over 7:");

for (let movie of movies){
    if(movie.rating > 7){
        console.log(`Name movie ${movie.tittle} (${movie.rating})`);
    }
}

/*Exercise 5: The contents of the object describing the position of the vessel named "Mareno" are written on the console:


LATITUDE -> 40.07288 
LONGITUDE -> 154.48535 
COURSE -> 285.6 
SPEED -> 14.0 
IMO -> 9175717 
NAME -> MARENO

The code presented below is used for this. Complete the program by declaring the missing object in place of the three dots:
*/

let vessel = {
    LATITUDE:40.07288,
    LONGITUDE:154.48535,
    COURSE:285.6,
    SPEED:14.0,
    IMO:9175717,
    NAME:"MARENO"
    };
     
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}

/*Exercise 6: Modify the calculator program that you made in Module 4 Section 2 in such a way that it will work in the loop until 
the user inputs Q in any of the prompt boxes.*/
while(true){
    let inputOne = prompt ("Ingresa el primer numero");
    let inputTwo = prompt ("Ingresa el segundo numero");
    let operationInputs= prompt ("Ingresa la operacion a realizar");

    if(inputOne.toLowerCase == "q" || inputTwo.toLowerCase == "q" || operationInputs.toLowerCase == "q"){
        break;
    }

    inputOne = Number(inputOne);
    inputTwo = Number (inputTwo);
    
    if ( !Number.isNaN (inputOne) && !Number.isNaN(inputTwo)){
        switch (operationInputs){
            case "+":
                alert (inputOne + inputTwo);
                break;

            case "-":
                alert (inputOne - inputTwo);
                break;

            case "*":
                alert (inputOne * inputTwo);
                break;

            case "/":
                alert (inputOne / inputTwo);
                break;
            
            default:
                alert("Operacion invalida");
                break;
        }
    }
    else{
        alert("Invalido");
    }
}