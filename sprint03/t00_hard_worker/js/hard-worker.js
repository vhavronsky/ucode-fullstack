class HardWorker {
    get age() {
        return this.age_
    }
    set age(num) {
        if(num >= 1 && num < 100) this.age_ = num
    }

    get salary() {
        return this.salary_
    }
    set salary(num) {
        if(num >= 100 && num < 10000) this.salary_ = num
    }
    
    name;

    toObject() {
        return {
            name: this.name,
            age: this.age,
            salary: this.salary
        }
    }
}


let worker = new HardWorker;

worker.name = 'Bruce';
console.log(worker.name);

worker.age = 50;
worker.salary = 1500;
console.log(worker.toObject());

worker.name = 'Linda';
worker.age = 140;
console.log(worker.toObject());


