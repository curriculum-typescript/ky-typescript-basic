let fruits: Array<string> = ["apple", "banana", "cherry"]; // 문자열 배열

// console.log(scores[0]);    // 90
// console.log(fruits.length); // 3

function calculateAverage(scores: number[]): number {
 let total = scores.reduce((sum, score) => sum + score, 0);

 return total / scores.length;
}
let marks: number[] = [90, 85, 88]; // 숫자 배열


console.log(`평균: ${calculateAverage(marks)}`)