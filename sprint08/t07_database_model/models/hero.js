let Model = require('./../model');

class Hero extends Model{
    data = [];
    constructor() {
        super('heroes') 
    }    
}
module.exports = Hero;