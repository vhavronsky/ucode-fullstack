function Calculator() {
    this.result = 0;
    let that = this;
    
    this.init = function(num) {
        this.result = num;
        return this;
    }
    this.add = function(num) {
        this.result += num;
        return this;
    }
    this.sub = function(num) {
        this.result -= num;
        return this;
    }
    this.mul = function(num) {
        this.result *= num;
        return this;
    }
    this.div = function(num) {
        this.result /= num;
        return this;
    }   
    this.alert = function() {
        setTimeout(function() {
            alert(`Your result is: ${that.result}`)
        }, 5000);
    }
    
}

const calc = new Calculator();

console.log(
    calc
    .init(0)
    .add(11)
    .mul(4)
    .div(4)
    .sub(1)
    .result  // 10
);
    
calc.alert();

 


