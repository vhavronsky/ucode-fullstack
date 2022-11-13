let houseBlueprint = {
    address: this.address,
    date: this.date,
    description: this.description,
    owner: this.owner,
    size: this.size,
    getDaysToBuild: function() {return this.size / this._building_speed}
}

function HouseBuilder(address, description, owner, size, roomCount, _building_speed) {
    this.address = address
    this.date = new Date()
    this.description = description
    this.owner = owner
    this.size = size
    this.roomCount = roomCount
    this._building_speed = 0.5
    // this.getDaysToBuild = function() {return this.size / this._building_speed}
}

HouseBuilder.prototype = houseBlueprint


const house = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J. Smith',
110,
5);

console.log('House');    

console.log(house.address);
// '88 Crescent Avenue'

console.log(house.description);
// 'Spacious town house with wood flooring, 2-car garage, and a back patio.'

console.log(house.size);
// 110

console.log(house.date.toDateString());
// [the current date], for example: 'Tue Aug 11 2020'

console.log(house.owner);
// J. Smith

console.log(house._building_speed);
// 0.5

console.log(house.getDaysToBuild());
// 220

console.log(house.roomCount);
// 5

// TEST 2   
const flat = new HouseBuilder('London',
                              'cool flat with good neighbours',
                              'Simpson',
                              73,
                              2)
console.log('Flat');    
                        
console.log('Date of building: ' + flat.date.toDateString());

console.log('Owner: ' + flat.owner);

console.log('Description: ' + flat.description);

console.log('Address: ' + flat.address);

console.log('Size: ' + flat.size);

console.log('Days to build: ' + flat.getDaysToBuild());

