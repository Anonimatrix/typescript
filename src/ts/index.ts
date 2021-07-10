export {};
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

//Array de Arrays de strings
let mauros: string[][] = [['dsa', 'dsa'], ['dsa', 'dsa']];

//Tuplas
let lols: [number, number, string, boolean] = [23, 23, 'sda', true];

//Tipos literales
type literal = 4 | 6 | 8;
let hilosProcesador: literal = 4;

//Alias
type ns = number | string;
let password: ns = 2321321321;

//Enums
enum Colors {
    Red = '#f74',
    Blue = '#62f',
    Green='#0f7'
}

let red: Colors = Colors.Red;

//Interfaces
interface Vehiculo {
    readonly velocidad: number,
    readonly modelo: string,
    readonly marca: string,
}

//Extends interfaces

interface Coche extends Vehiculo{
    ruedas?: string,
}

let Nissan: Coche = {
    velocidad: 10,
    modelo: 'Speed',
    marca: 'Nissan',
    ruedas: '3x3'
}

//Aserciones de tipo | Bracket Angle | Desactivado en no-angle-bracket-type-assertion: true
let lol: any = 'asda';
(<string>lol).substr(2);
(lol as string).substr(2);
