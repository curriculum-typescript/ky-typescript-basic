function getPersonInfo() {
    return ["Bob", 30];
}
let person = getPersonInfo();
console.log(`name: ${person[0]}, age: ${person[1]}`);
let product = ["Keyboard", 45000];
const [productName, price] = product;
console.log(`상품명 : ${productName} , 가격: ${price}`);
function displayUserInfo(user) {
    console.log(`이름 : ${user[0]},나이:${user[1]}, 직업:${user[2]}`);
}
let userInfo = ["Jane", 28, "개발자"];
displayUserInfo(userInfo);
export {};
