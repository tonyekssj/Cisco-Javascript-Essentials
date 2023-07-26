//Declaration object

let testObj={};
console.log(typeof testObj);

testObj = {
    name: "Antonio",
    money: 500
};

console.log("Nombre: ", testObj.name);
console.log("Dinero disponible: ", testObj.money);


let userOne={
    name:"Calvin",
    surname:"Hart",
    age:66,
    email: "CalvinMHart@teleworm.us"    
};

let userTwo={
    name:"Mateus",
    surname:"Pinto",
    age:21,
    email:"MateusPinto@dayrep.com"
}

console.log("User One Name: " + userOne.name);
console.log("User Two Name: " + userTwo.name);

userOne.age=16;

console.log("User One Age: " + userOne.age);
console.log("User Two Age: " + userTwo.age);

userOne.phone= "909-921-123";
userTwo.phone;

console.log("New phone of user one: " + userOne.phone);
console.log("Phone User two: " + userTwo.phone);

delete userTwo.phone;

console.log(userTwo);

//Declaration array


let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(days[0]);
console.log(days[1]);
console.log(days[2]);

days[0]="S";
console.log(days[0]);

let emptyArray = [];

console.log(typeof emptyArray, emptyArray[0]);

emptyArray[0]="Moon";

console.log(emptyArray[0]);

let randomValues = ["Hello",1,true,23.2];

console.log(randomValues);

let names = [["Olivia", "Emma", "Mia", "Sofia"], 
             ["William", "James", "Daniel"]];

console.log(names[0]);
console.log(names[0][0]);

let maleNames=names=[1];

console.log(maleNames, typeof maleNames);

//Declare an arrays of objects

let userArray= [
    {
        name:"Antonio",
        age:25,
        email:"gvazquez10@uabc.edu.mx"
    },
    {   name:"Alejandro",
        age:25,
        email:"elalejandro@uabc.edu.mx"
    }
];


console.log(userArray[0].name);
console.log(userArray[1].name);

userArray[2]={
    name:"Luis",
    age:26,
    email:"luislosoya@uabc.edu.mx"
};

console.log(userArray[2].name);

console.log("Longitud del arreglo:", userArray.length);

console.log (userArray instanceof Array);
console.log (userArray instanceof Object);

//Methods of array
let namesM = ["Olivia", "Emma", "Mateo", "Samuel"];

console.log("Longitud del arreglo:",namesM.length);
console.log("Index of [Emma]: ", namesM.indexOf("Emma"));

namesM.push("Antonio");
console.log(namesM);

namesM.unshift("Alejandro");
console.log(namesM);

namesM.pop();
console.log(namesM);

namesM.shift();
console.log(namesM);

namesM.reverse();
console.log(namesM);
