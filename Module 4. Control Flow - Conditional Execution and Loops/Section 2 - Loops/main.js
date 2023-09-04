
//WHILE LOOP
let n = 0;

while (n < 91){
    n += 10;
    console.log(n);
}

let counter = 0;
let terminarLoop = false;

while (!terminarLoop){
    confirm = confirm
    terminarLoop = confirm(`Contador ${counter}, deseas continuar contando`);
    counter +=1;
}

//DO-WHILE LOOP

let isOver;
let counterDo = 0;

do{
    isOver = !confirm(`${counter++} Continue the loop?`);
    console.log("Value of isOver:", isOver);

}while(!isOver);

//FOR LOOP

for(let i = 0 ; i < 10 ; i++){
    console.log(i+1);
}

//LOOPS AND ARRAYS

let names=[]
let isOverArray = false;

while (!isOverArray){
    let name=prompt('Enter a name or press cancel.');
    if (name != null){
        names.push(name);
    }
    else{
        isOverArray=true;
    }

}
for (let i = 0; i < names.length;i++){
    console.log(`Array [${i}]: ${names[i]}`);
}

//FOR OF

let values=[50,10,20,320,12];
let numeroMayor=0;

for(let numero of values){

    if(numero>numeroMayor){
        numeroMayor=numero;
    }
}

console.log(`El numero mayor del arreglo es ${numeroMayor}`);

//FOR IN 

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
for (let key in user) {
    console.log(key); // -> name, surname, age, email
};