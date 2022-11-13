let beginRange = prompt('Please, enter the beginning of a range', '1');
let endRange = prompt('Please, enter the end of a range', '100');

function checkDivision(beginRange, endRange) {
    let res = '';
    for (let i = beginRange; i <= endRange; i++) {
        if(i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
            res += `${i} is even, a multiple of 3, a multiple of 10`;
        } else if(i % 2 === 0 && i % 3 === 0) {
            res += `${i} is even and a multiple of 3`;
        } else if(i % 3 === 0 && i % 10 === 0) {
            res += `${i} is a multiple of 3 and a multiple of 10`;
        } else if(i % 2 === 0  && i % 10 === 0) {
            res += `${i} is even and a multiple of 10`;
        } else if(i % 10 === 0) {
            res += `${i} is a multiple of 10`;
        // } else if(i % 5 === 0) {
        //     res += `${i} is a multiple of 5`;
        } else if(i % 3 === 0) {
            res += `${i} is a multiple of 3`;
        } else if(i % 2 === 0) {
            res += `${i} is even`;
        } else {
            res += `${i} -`;
        }
        res += '\n'
    }
    console.log(res);
}

checkDivision(beginRange, endRange);