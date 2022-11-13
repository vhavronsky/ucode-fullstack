const chai = window.chai;
const expect = chai.expect;

describe('checkBrackets', () => {
    // 5 incorrect cases with different data types
    it('NaN', () => {
        expect(checkBrackets(NaN)).to.deep.equal(-1);
    })
    it('undefined', () => {
        expect(checkBrackets(undefined)).to.deep.equal(-1);
    })
    it('number', () => {
        expect(checkBrackets(231)).to.deep.equal(-1);
    })
    it('string', () => {
        expect(checkBrackets('string')).to.deep.equal(-1);
    })
    it('null', () => {
        expect(checkBrackets(null)).to.deep.equal(-1);
    })
    //  10 correct cases
    it('()', () => {
        expect(checkBrackets('()')).to.deep.equal(0);
    })
    it('()1)', () => {
        expect(checkBrackets('()1)')).to.deep.equal(1);
    })
    it('()1(', () => {
        expect(checkBrackets('()1(')).to.deep.equal(1);
    })
    it('()((()))()', () => {
        expect(checkBrackets('()((()))()')).to.deep.equal(0);
    })
    it('1(2(3(4(5(6(', () => {
        expect(checkBrackets('1(2(3(4(5(6(')).to.deep.equal(6);
    })
    it(')(()', () => {
        expect(checkBrackets(')(()')).to.deep.equal(0);
    })
    it('))()()()()((1(2(', () => {
        expect(checkBrackets('))()()()()((1(2(')).to.deep.equal(2);
    })
    it('1)2)()()()3)', () => {
        expect(checkBrackets('1)2)()()()3)')).to.deep.equal(3);
    })
    it('wor)dw(ith', () => {
        expect(checkBrackets('wor)dw(ith')).to.deep.equal(0);
    })
    it('()1)))(()2)(()()())', () => {
        expect(checkBrackets('()1)))(()2)(()()()')).to.deep.equal(2);
    })
    // 
})