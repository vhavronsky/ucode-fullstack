function addWords(obj, wrds) {
    let arr = obj.words.split(' ');
    arr.splice(1, 2)
    let wrdsArr = wrds.split(' ');
    obj.words = arr.concat(wrdsArr[0]);
    obj.words = obj.words.join(' ')
}
function removeWords(obj, wrds) {
    let arr = obj.words.split(' ');
    arr.shift();
    arr.pop();
    obj.words = arr.join(' ')
}
function changeWords(obj, oldWrds, newWrds) {
    let arr = obj.words.split(' ');
    newWrds.split(' ');
    arr.splice(0, 2)
    oldWrds = arr.push(newWrds)
    obj.words = arr.join()
}

// TESTING
const obj = {
    words: 'newspapers newspapers  books magazines'
};
console.log(obj); // {words: "newspapers newspapers  books magazines"}
addWords(obj, 'radio newspapers  ');
console.log(obj); // {words: "newspapers books magazines radio"}
removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}
changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}