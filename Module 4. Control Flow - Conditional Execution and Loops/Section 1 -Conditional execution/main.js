//IF STATEMENT
let ready=confirm('Estas listo');

if(ready){
    alert("Usuario listo");
}

//IF-ELSE STATEMENT
let mayoriaEdad=18;
let edad=prompt('Ingresa tu edad');

if(edad >=18){
    alert("Tiene la mayoria de edad");
}

else{
    alert("Es menor de edad");
}

//IF ELSE STATEMENT
let number = prompt("Ingresa un numero", 0);
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}

//SWITCH CASE STATEMENT

let gate = prompt("Escoje una puerta: a, b, or c");
let win = false;
switch (gate) {
    case "a":
     alert("Puerta A: Vacia");
     break;
    case "b":
     alert("Puerta B: main prize");
     win = true;
     break;
    case "c":
     alert("Puerta C: Vacia");
     break;
    default:
     alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}