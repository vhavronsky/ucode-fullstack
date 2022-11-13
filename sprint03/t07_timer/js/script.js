class Timer {
    id;
    constructor(title, delay, stopCount) {
        this.title = title
        this.delay = delay
        this.stopCount = stopCount
        this.start()
    }
}
Timer.prototype.start = function() {
    console.log(`Timer ${this.title} started ( delay = ${this.delay},  stopCount = ${this.stopCount} )`);
        this.id = setInterval(() => {
            this.tick()
        }, this.delay)
}
Timer.prototype.tick = function() {
    this.stopCount--
        console.log(`Timer ${this.title} Tick! | cycles left: ${this.stopCount}`);
        if(this.stopCount == 0) {this.stop()}
}
Timer.prototype.stop = function() {
    console.log(`Timer ${this.title} stopped`);
    clearInterval(this.id)
}


function runTimer(id, delay, counter) {
   return new Timer(id, delay, counter)
}


// Testing
runTimer("Bleep", 1000, 5);
setTimeout(function() {runTimer("Tick-Tick", 700, 6)}, 5000) // you can comment this line
/*
Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/