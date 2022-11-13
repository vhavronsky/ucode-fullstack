function concat(str1, str2) {
    if (str1 && str2) {
        return str1.concat(' ', str2);
    } else {
        counter.count = 0;
        function counter() {
            counter.count++;
            return `${str1} ${prompt('Enter additional text')}`
        }
        return counter;
    }
}

let first = concat('Hey,', 'Hulk!');
let output = first;
console.log(output);

let second = concat("Don't");
output = second();
// a prompt appears. Enter "touch me!" into the prompt
console.log(output);
console.log(second.count);

output = second();
// a prompt appears. Enter "kill him!" into the prompt
console.log(output);
console.log(second.count);

output = second();
// a prompt appears. Enter "do this!" into the prompt
console.log(output);
console.log(second.count);

let third = concat("You're");
output = third();
// a prompt appears. Enter "adorable!" into the prompt
console.log(output);
console.log(third.count);

let last = concat('Bye,', 'Hulk!');
output = last;
console.log(output);

/* Result in Console panel:
Hey Hulk!
Don't touch me!
1
Don't kill him!
2
Don't do this!
3
You're adorable
1
*/
