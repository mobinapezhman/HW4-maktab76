function sumRoundedNumber(array) {
    let total = array.reduce(function (sum, element) {
        return sum + element;
    }, 0);
    return Math.round(total);
}
console.log(sumRoundedNumber([15.5, 2.3, 1.1, 4.7]));