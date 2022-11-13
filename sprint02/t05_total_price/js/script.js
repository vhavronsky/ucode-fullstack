function total(addCount, addPrice, currentTotal = 0) {
    let res = ((addCount * addPrice) + currentTotal);
    return res;
}

// TESTING
let sum = total(2, 2.5);
sum = total(1, 6, sum);
sum = total(3, 0.47, sum);
console.log(sum);

let sum2 = total(5, 0.22);
sum2 = total(1, 32, sum2);
sum2 = total(2, 13, sum2);
console.log(sum2);
