module.exports = class Access{
    constructor() {
        this.mark_LXXXV = undefined
    }
}

const Access = require('./access');

const o = new Access;
console.log(o.mark_LXXXV);

o.mark_LXXXV = 'null';
console.log(o.mark_LXXXV);

o.mark_LXXXV = 'INACTIVE';
console.log(o.mark_LXXXV);