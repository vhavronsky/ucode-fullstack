// i.getAnonymous = (name, alias, affiliation) => {
//     return {
//         name: name,
//         alias: alias,
//         affiliation: affiliation
//     }
// }

const PrivateFields = class {
    constructor (name, alias, affiliation) {
        this.name = name;
        this.alias = alias;
        this.affiliation = affiliation
    }
    #name = this.name;
    #alias = this.alias;
    #affiliation = this.affiliation;
}

const i = require('./index');

i.getAnonymous = function(nameVal, aliasVal, affiliationVal) {
    return new PrivateFields(nameVal, aliasVal, affiliationVal)
}

const mandarin = i.getAnonymous('Unknown', 'Mandarin', 'Ten Rings');

console.log([
    mandarin.name,
    mandarin.alias,
    mandarin.affiliation,
].join('\n'));