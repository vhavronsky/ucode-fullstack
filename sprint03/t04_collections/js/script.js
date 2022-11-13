
let guestList = new WeakSet()

let 
    danya = {},
    roma = {},
    vlad = {},
    taras = {},
    dima = {}

guestList
    .add(danya)
    .add(roma)
    .add(vlad)
    .add(taras)
    .add(dima)

// guestList tasks
console.log(guestList.has(danya));
console.log(guestList.size);
console.log(guestList.delete(dima));


let menu = new Map()

menu
    .set('Big Mac', 12)
    .set('Sushi', 30)
    .set('Pizza', 18)
    .set('Borsch', 8)
    .set('Varenyky', 10)

// menu task
for(let [dish, price] of menu) {
    console.log(dish, price);
}


let bankVault = new WeakMap()

let p42h12 = {},
    i532ff = {},
    kk42lv = {},
    m4541v = {},
    llk125 = {}

bankVault
    .set(p42h12, 'Bitcoin')
    .set(i532ff, 'Euro')
    .set(kk42lv, 'Dollar')
    .set(m4541v, 'UAH')
    .set(llk125, 'Gold')

// bankVault task
console.log(bankVault.get(kk42lv));


let coinCollection = new Set()

coinCollection.add('DogeCoin')    
coinCollection.add('Bitcoint')
coinCollection.add('Ripple')     
coinCollection.add('TWT')     
coinCollection.add('Ethereum')     

// coinCollection task
for(let item of coinCollection) {
    console.log(item);
}
