function copyObj(obj) {
    let cpy = {};

    for(let attr in obj) {
        if(obj.hasOwnProperty(attr))
        cpy[attr] = obj[attr];
    }

    return cpy;
}


let user = {
    name: 'Steve',
    surname: 'Rogers',
    age: 101,
    city: 'New York'
};

let cpy = copyObj(user);
console.log(user);
console.log(cpy);

user.name= 'John';
console.log(user);
console.log(cpy);

cpy.age = 59;
console.log(user);
console.log(cpy);

cpy.city = 'Kyiv';
console.log(user);
console.log(cpy);

user.surname = 'Backham';
console.log(user);
console.log(cpy);