// function solution(arr) {
//     arr = arr.map(x => Number(x));
//     console.log(`Sum = ${arr.reduce((a,b) => a+b)}`);
//     console.log(`Min = ${arr.reduce((a,b) => Math.min(a,b))}`);
//     console.log(`Max = ${arr.reduce((a,b) => Math.max(a,b))}`);
//     console.log(`Product = ${arr.reduce((a,b) => a*b)}`);
//     console.log(`Join = ${arr.join('')}`);
// }

function functionalSum(input) {
    let totalSum = 0;
    totalSum = (function sum() {
        if (input.length > 0) {
            totalSum += input.shift();
            sum();
        } else {
            console.log(totalSum);
            return totalSum;
        }
    })()
}
functionalSum(1)(2)(-3)
solution(['1', '2', '3', '4', '5'])