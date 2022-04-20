let Array1 = [5, 7, 9];
let Array2 = [9, 8, 5, 10];
let FinalArray = Array1.concat(Array2.filter((item) => Array1.indexOf(item) === -1));
console.log(FinalArray);