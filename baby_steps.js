let arr = process.argv.slice(2);

let sum = arr.reduce((a, b) => +a + +b);

console.log(sum);