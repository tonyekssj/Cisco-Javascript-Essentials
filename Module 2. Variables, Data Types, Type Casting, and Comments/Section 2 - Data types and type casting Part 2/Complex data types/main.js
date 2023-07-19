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

