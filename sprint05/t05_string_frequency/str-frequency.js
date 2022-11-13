module.exports = class StrFrequency {
  constructor(str) {
    this.str = str;
  }

  letterFrequencies() {
    let str = this.str.toUpperCase()
    let obj = {};

    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/i)) {
        obj[str[i]] = str.split( new RegExp( str[i], "gi" ) ).length-1;
      }
    }

    return obj;
  }

  wordFrequencies() {
    let str = this.str.toUpperCase()
    let obj = {};
    let arr = str.split(' ');

    for (let word of arr) {
      if (word.match(/[a-z]/i))
      obj[word] = str.split(word).length-1;
    }

    return obj

    // let result = '';
    // let str = this.str.toUpperCase()
    //   let obj = {};
    //   let regExp = /[a-z\s]/i;
    //   for (let i = 0; i < str.length; i++){
    //     if(regExp.test(str[i])){
    //       result += str[i]
          
    //     }              
    //   }
    //   result.split(' ').map(item => {
    //     if(item.length > 0){
    //       obj[item] = obj[item] ? obj[item] + 1 : 1
    //     }});
    //   return obj
  }

  reverseString() {
    return this.str.split("").reverse().join("");
  }
}

const StrFrequency = require('./str-frequency');

function test(str) {
  const sf = new StrFrequency(str);
  console.log(`Letters in ${str}`);
  for (const [k, v] of Object.entries(sf.letterFrequencies())) {
      console.log(`Letter ${k} is repeated ${v} times`);
  }

  console.log(`Words in ${str}`);
  for (const [k, v] of Object.entries(sf.wordFrequencies())) {
      console.log(`Word ${k} is repeated ${v} times`);
  }

  console.log(`Reverse of the string: ${str}`);
  console.log(`${sf.reverseString()}`);
}

test("Face it, Harley-- you and your Puddin' are kaput!");
console.log('*************');
test('  Test test 123 45 !0 f   HeLlO wOrLd  ');
console.log('*************');
test('');
