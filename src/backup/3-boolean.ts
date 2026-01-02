let isCompleted: boolean = false;
let hasPermission: boolean = true;

console.log(`완료 여부: ${isCompleted}`);       // 출력: 완료 여부: false
console.log(`권한 있음: ${hasPermission}`);     // 출력: 권한 있음: true


function isPositive(num:number):boolean{
    return num > 0
}


let value:number=-3


console.log(`양수인가요? ${isPositive(value)}`)