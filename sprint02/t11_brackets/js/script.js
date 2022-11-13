function checkBrackets(str) {
    let regex = new RegExp('[(|)]');
    let x = 0;
    let y = 0;

    if(!regex.test(str) || !str) {
        return -1;
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {x++}
        else if (str[i] == ')') {y++}
    }
    
    let result = x - y;
    if(result < 0) {
        result = result * -1;
    }

    return result;
}


console.log(checkBrackets('1)()(())2)()'));// 2
console.log(checkBrackets(NaN));// -1
console.log(checkBrackets('00)))((('));// 0