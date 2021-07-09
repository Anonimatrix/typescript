let a = "a";

//Number
//Explicito
let phone: number;
phone = 2;
phone = 54321;
//Implicito | Inferido
let surname = "name";
surname = "adsa";
// surname = 22 ERROR

//Hexadecimal
let hex: number = 0xf00d;
//Binario
let binary: number = 0b1010;
//Octal
let octal: number = 0o744;

function octalFunction(){
    console.log('a');
    return octal;
}

if(prompt('Lol')){

octalFunction();
}