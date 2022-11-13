function sortEvenOdd(nums) {
    let newArr = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            newArr.unshift(nums[i]);
        } else {
            newArr.push(nums[i]);
        }
    }
    return newArr;
}

let arr = [78, 1, 9, 17, 12, 23, 8, 4, 2]
console.log(sortEvenOdd(arr));