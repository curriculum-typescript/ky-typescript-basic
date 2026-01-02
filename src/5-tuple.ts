function getPersonInfo(): [string, number] {
  return ["Bob", 30];
}

let person:[string, number]=getPersonInfo()

console.log(`name: ${person[0]}, age: ${person[1]}`)

let product: [string, number] = ["Keyboard", 45000];

const [productName, price]=product

console.log(`상품명 : ${productName} , 가격: ${price}`)

function displayUserInfo(user:[string, number,string]):void{
console.log(`이름 : ${user[0]},나이:${user[1]}, 직업:${user[2]}`)
}

let userInfo:[string,number,string]=["Jane",28,"개발자"]

displayUserInfo(userInfo)