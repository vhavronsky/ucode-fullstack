let a = 1;

function* generateSum() {
    let num;
    for (let i = 0; i < Infinity; i++) {
        num = parseInt(prompt(`Previous result: ${a}. Enter a new number:`));
        if (num > 10000) {
            a = 1;
        } else if (isNaN(num)) {
            console.error("Invalid number!");
            break
        } else {
            a += num;
        }
    }
}

for (let gen of generateSum()) {}
