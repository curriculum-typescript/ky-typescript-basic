let firstName:string="Jhon"
let lastName:string="Deo"

let fullName: string = `${firstName} ${lastName}`;
console.log(fullName); // 출력: John Doe


function greet(name:string):string{
    return `Hello ${name}`
}

let userName:string="Alice"


console.log(greet(userName))