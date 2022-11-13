let houseMixin = {

    wordReplace(oldWrd, newWrd) {
        this.description = this.description.replace(oldWrd, newWrd)
    },
    wordInsertAfter(beforeWrd, afterWrd) {
        this.description = this.description.replace(beforeWrd, `${beforeWrd} ${afterWrd}`)
    },
    wordDelete(wrd) {
        this.description = this.description.replace(wrd, '')
    },
    wordEncrypt() {
        const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ,.!?-1234567890';
        const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm ,.!?-1234567890';
        let encoded = '';
        let str = this.description
        for (let i = 0; i < str.length; i++) {
            const index = input.indexOf(str[i]);
            encoded += output[index];
        }
        this.description = encoded
        return this.description;
    },
    wordDecrypt() {
        const input = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm ,.!?-1234567890';
        const output = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ,.!?-1234567890';
        let encoded = '';
        let str = this.description
        for (let i = 0; i < str.length; i++) {
            const index = input.indexOf(str[i]);
            encoded += output[index];
        }
        this.description = encoded
        return this.description;
        }
}


const house = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J. Smith', 110, 5);

Object.assign(house, houseMixin);

console.log(house);

console.log(house.getDaysToBuild()); 
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter ("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt()
console.log(house.description);
// console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

