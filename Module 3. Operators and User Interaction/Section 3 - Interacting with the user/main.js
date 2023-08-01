let nombre="Antonio";

alert(`Prueba de alert con ${nombre}`);
window.alert("Segunda prueba de windows.alert");

let decision =confirm("Estas bien?");

console.log("Contenido de la variable decision:",decision);

let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";
let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");