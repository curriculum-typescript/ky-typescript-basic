let fruitList: string[] = ["apple", "banana", "blueberry", "cherry"];


function filterFrutes(frutes:string[]):string[]{
    return frutes.filter(frute=>frute.startsWith('b'))
}

console.log(`'b'로 시작하는 과일 : ${filterFrutes(fruitList)}`)