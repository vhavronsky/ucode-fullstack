exports.calculateTime = () => {
    let start = new Date("01-02-1939");
    let end = new Date();
    let obj = {
      years() {
        return end.getFullYear() - start.getFullYear();
      },
      months() {
       return end.getMonth() - start.getMonth();
      },
      days(){
         return end.getDate() - start.getDay();
      }
    };
    return obj
};

//-----TEST------//

const normal = require('./normal');
const quantum = require('./quantum');


const time = normal.calculateTime();
console.log(`In real life you were absent for ${time.years()} years, ${time.months()} months, ${time.days()} days.`)

 const quantumTime = quantum.calculateTime();

console.log(`In quantum space you were absent for ${quantumTime[0]} years, ${quantumTime[1]} months, ${quantumTime[2]} days.`)