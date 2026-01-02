let age:number=25
let pi: number = 3.14;
let hex: number = 0xff; // 16진수
let binary: number = 0b1010; // 2진수
let octal: number = 0o744; // 8진수


function calculate(radius:number):number{
 return Math.PI*radius*radius;
}

let radius:number=5

console.log(`Area: ${calculate(radius)}`)