class LinkedList {
    constructor(array) {
        this.data = array
    }

    log() {
        console.log(this.data.join(', '));
    }

    add(value) {
        return this.data.push(value)
    }
    remove(value) {
        let ind = this.data.indexOf(value)
        if(ind == -1) {
            return false
        }
        return this.data.splice(ind, 1)
    }
    contains(value) {
        let ind = this.data.indexOf(value)
        if(ind == -1) {
            return false
        }
        return true
    }
    *[Symbol.iterator]() {
        for(let item of this.data) {
            yield item
        }
    }
    result = this[Symbol.iterator]()
    next() {
        return this.data.next()
    }

    clear() {
        this.data = []
    }
    count() {
        return this.data.length
    }
}

function createLinkedList(array) {
    return new LinkedList(array)
}


const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log(); 
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for(const n of ll) {
    sum += n;
}
console.log(sum);
// "25"
ll.clear();
ll.log();
// ""