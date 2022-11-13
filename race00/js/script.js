class Calculator {
    constructor() {
        this.outputHistory= document.querySelector('.output-history');
        this.outputCurrent = document.querySelector('.output-current')
        this.outputRessult = document.querySelector('.output-result')
        this.result = 0;
        this.equation = '';
        this.buttons = {
            numberBtns: document.querySelectorAll('.number'),
            operationBtns: document.querySelectorAll('.operation'),
            percent: document.querySelector('.percent'), 
            change: document.querySelector('.change'),
            equalsBtn: document.querySelector('.equals'),
            clearBtn: document.querySelector('.clear'),
            changeBtn: document.querySelector('.change'),
            factorial: document.querySelector('.factorial'),
            exponentiation: document.querySelector('.exponentiation'),
            squareRoot: document.querySelector('.square-root'),
            square: document.querySelector('.square'),
            cube: document.querySelector('.cube'),
            P: document.querySelector('.P'),
            mc: document.querySelector('.mc')
        }
    };
    calculateEquation() {
        let array = this.equation.trim().split(' ')
        let operators = ['÷', '*', '-', '+'];
        for (let operator of operators) {
            while(array.includes(operator))  {
                if (array[array.indexOf(operator) - 1]) {
                    var firstItem = numberUpgrade(array[array.indexOf(operator) - 1]);
                } else {
                    var firstItem = parseFloat(array[array.indexOf(operator) - 1]);
                }
                if (array[array.indexOf(operator) + 1]) {
                    var secondItem = numberUpgrade(array[array.indexOf(operator) + 1]);
                } else {
                    var secondItem = parseFloat(array[array.indexOf(operator) + 1]);
                }
                
                let result;
                switch(operator) {
                    case '*':
                        result = parseFloat(firstItem * secondItem);
                        break;
                    case '÷':
                        result = parseFloat(firstItem / secondItem);
                        break;
                    case '-':
                        result = parseFloat(firstItem - secondItem);
                        break;
                    case '+':
                        result = parseFloat(firstItem + secondItem);
                        break;
                    
                };
                array.splice(array.indexOf(operator) - 1, 1);
                array.splice(array.indexOf(operator) + 1, 1, result);
                array.splice(array.indexOf(operator), 1);
            };
        };
        this.outputCurrent.innerText = this.equation.split(' ').join('')
        if (array[0] || array[0] == '0') {
            this.outputRessult.innerText = '=' +numberUpgrade(array[0])
        };
        return numberUpgrade(array[0])
    };
    clearCalculator() {
        this.equation = '';
        this.calculateEquation();
        this.outputRessult.innerText = '';
        this.outputHistory.lastChild.scrollIntoView(false);
    }

    showAdditionalOperators() {
        document.querySelector('.more').addEventListener('click', () => {
            document.querySelectorAll('.add').forEach(item => {
                item.classList.toggle('hide')
            })
        })
    }
};

const calculator = new Calculator();
let allButton = document.querySelectorAll('button');

calculator.showAdditionalOperators()

calculator.calculateEquation()
turnOnClick(true)


function calculatorClick() {
    let partOfHistory = document.createElement('p')
    partOfHistory.innerText = calculator.equation.split(' ').join('') + ` = ${calculator.calculateEquation()}`
    calculator.outputHistory.append(partOfHistory)
    calculator.clearCalculator()
    allButton.forEach((item) => {
        item.removeEventListener('click', calculatorClick)
    })
    calculator.outputRessult.classList.remove('bigger')
    turnOnClick(true)
}



function turnOnClick(bool) {
    if (bool) {
        calculator.buttons.numberBtns.forEach((item) => {
            item.onclick = function() {
                let array = calculator.equation.trim().split(' ')
                if (item.innerText == '.' && array[array.length - 1].slice(-1) == '.') {
                } else if (item.innerText == '.' && array[0].length == 0 || item.innerText == '.' && ['÷', '*', '-', '+'].includes(array[array.length - 1])) {
                        calculator.equation += '0' + item.innerText
                } else {
                    calculator.equation += item.innerText
                };
                calculator.calculateEquation();
            };
        });
        
        calculator.buttons.operationBtns.forEach((item) => {
            item.onclick = function() {
                if (calculator.equation || calculator.equation[0] == '0') {
                    let array = calculator.equation.trim().split(' ')
                    let lastElementSymbol = array[array.length-1].slice(-1)
                    if(lastElementSymbol == '.' || lastElementSymbol == '√') {
                        calculator.equation += `0 ${item.innerText} `
                    } else if (lastElementSymbol == '^') {
                        calculator.equation += `1 ${item.innerText} `
                    } else {
                        calculator.equation += ` ${item.innerText} `
                    }
                };
                if (['÷', '*', '-', '+'].includes(calculator.equation.slice(-5,-4))) {
                    calculator.equation = spliceSplit(
                        calculator.equation, calculator.equation.length - 5,
                        1, calculator.equation.slice(-2,-1)
                    );
                    calculator.equation = calculator.equation.slice(0,-3)
                };
                calculator.calculateEquation();
            };
        });

        calculator.buttons.clearBtn.onclick = function() {
            calculator.clearCalculator();

        };

        calculator.buttons.equalsBtn.onclick = function() {
            if (calculator.equation) {
                let array = calculator.equation.trim().split(' ')
                let lastElementSymbol = array[array.length-1].slice(-1)
                        if (lastElementSymbol == '^') {
                            calculator.equation += '1'
                            calculator.calculateEquation();
                        }
                if (!['÷', '*', '-', '+'].includes(array[array.length-1])) {
                    calculator.outputRessult.classList.add('bigger');
                    turnOnClick(false);
                    allButton.forEach((item) => {
                        item.addEventListener('click', calculatorClick);
                    });
                };
            } 
            
        };

        calculator.buttons.change.onclick = function() {
            let tempArray = calculator.equation.split(' ')
            let lastElement = parseFloat(tempArray[tempArray.length-1])
            if (lastElement) {
                tempArray[tempArray.length-1] = -tempArray[tempArray.length-1]
                calculator.equation = tempArray.join(' ')
                calculator.calculateEquation();
            }
        }
        calculator.buttons.percent.onclick = function() {
            let tempArray = calculator.equation.split(' ')
            let lastElement = numberUpgrade(tempArray[tempArray.length-1])
            if (lastElement) {
                let procented = (calculator.calculateEquation() + lastElement) / 100 * lastElement;
                tempArray[tempArray.length-1] = procented
                calculator.equation = tempArray.join(' ')
                calculator.calculateEquation();
            }
        }
        calculator.buttons.factorial.onclick = function() {
            let tempArray = calculator.equation.split(' ')
            let lastElement = parseInt(tempArray[tempArray.length-1])
            if (lastElement) {
                tempArray[tempArray.length-1] = lastElement + '!';
                calculator.equation = tempArray.join(' ')
                calculator.calculateEquation();
            }
        }
        calculator.buttons.squareRoot.onclick = function() {
            let tempArray = calculator.equation.split(' ')
            let lastElement = parseInt(tempArray[tempArray.length-1])
            if (lastElement) {
                tempArray[tempArray.length-1] = '√' + lastElement
                calculator.equation = tempArray.join(' ')
                calculator.calculateEquation();
            }
        }
        calculator.buttons.exponentiation.onclick = function() {
            let tempArray = calculator.equation.split(' ')
            let lastElement = parseInt(tempArray[tempArray.length-1])
            if (lastElement) {
                tempArray[tempArray.length - 1] = lastElement + '^'
                calculator.equation = tempArray.join(' ')
                calculator.calculateEquation();
            }
        }
        calculator.buttons.square.onclick = function(){
            let tempArray = calculator.equation.split(' ')
            let lastElement = parseInt(tempArray[tempArray.length-1])
            if (lastElement) {
                tempArray[tempArray.length - 1] = Math.pow(numberUpgrade(lastElement), 2)
                calculator.equation = tempArray.join(' ')
                calculator.calculateEquation();
            }
        }
        calculator.buttons.cube.onclick = function(){
            let tempArray = calculator.equation.split(' ')
            let lastElement = parseInt(tempArray[tempArray.length-1])
            if (lastElement) {
                tempArray[tempArray.length - 1] = Math.pow(numberUpgrade(lastElement), 3)
                calculator.equation = tempArray.join(' ')
                calculator.calculateEquation();
            }
        }
        calculator.buttons.P.onclick = function(){
            calculator.equation += '3.14159'
            calculator.calculateEquation();
        }
        calculator.buttons.mc.onclick = function(){
            calculator.outputHistory.innerHTML = ''
        }

    } else {
        for (button in calculator.buttons){
            if (calculator.buttons[button].length) {
                calculator.buttons[button].forEach((item) => {
                    item.onclick = function() {};
                }) 
            } else {
                calculator.buttons[button].onclick = function() {};
            }
        }
    };
};

function spliceSplit(str, index, count, add) {
    var ar = str.split('');
    ar.splice(index, count, add);
    return ar.join('');
  }

function makeAnimation() {
    for (let btn of allButton) {
        btn.classList.add('slideUp');
    }
    document.querySelector('.output').classList.add('slideUp');
}
makeAnimation();

function numberUpgrade(string) {
    if (typeof(string) != String) {
        string = string.toString()
    }
    let symbolArray = ['!', '^' , '√']
    if (string.includes('!') || string.includes('^') || string.includes('√')) {
        let symbol;
        for (let j = 0; j < symbolArray.length; j++) {
            if (string.indexOf(symbolArray[j]) != -1) {
                symbol = symbolArray[j]
            };
        };
        switch(symbol) {
          case '√':
            return Math.sqrt(parseFloat(string.slice(1)))
          case '^': 
            string = string.split('^')
            return Math.pow(parseFloat(string[0]), parseFloat(string[1]))
          case '!':
            let factorialed = 1;
            for (i = 0; i < parseFloat(string); i++){
                  factorialed = factorialed * (parseFloat(string) - i);
            }
            return factorialed
        }
    } else {
        return parseFloat(string);
    }
  }




