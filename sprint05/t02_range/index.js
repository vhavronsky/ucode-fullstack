const i = require('./index');

i.checkDivision = function(begin = 1, end = 60) {
    
    for(let i = begin; i <= end; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
            console.log(`The number ${i} is divisible by 2, is divisible by 3, is divisible by 10`);
        } else if (i % 2 === 0 && i % 3 === 0) {
            console.log(`The number ${i} is divisible by 2, is divisible by 3`);
        } else if (i % 2 === 0 && i % 10 === 0) {
            console.log(`The number ${i} is divisible by 2, is divisible by 10`);
        } else if (i % 3 === 0 && i % 10 === 0) {
            console.log(`The number ${i} is divisible by 3, is divisible by 10`);
        } else if (i % 10 === 0) {
            console.log(`The number ${i} is divisible by 10`);
        } else if (i % 3 === 0) {
            console.log(`The number ${i} is divisible by 3`);
        } else if (i % 2 === 0) {
            console.log(`The number ${i} is divisible by 2`);
        } else {
            console.log(`The number ${i} -`);
        }
    } 

}


console.log('*** Range is 3 - 7 checkDivision(3,7) ***');
i.checkDivision(3, 7);

console.log('\n*** Range is 58 - ... checkDivision(58) ***');
i.checkDivision(58);

console.log('\n*** Range is ... - ... checkDivision() ***');
i.checkDivision();