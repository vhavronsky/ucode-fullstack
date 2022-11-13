 export default class HardWorker {
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