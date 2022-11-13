class Avenger {
    constructor(name, alias, gender, age, powers, hp) {
        this.name = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers;
        this.hp = hp;
    }
}

module.exports.Avenger = Avenger;


//        TEST        //

const { Team } = require("./Team");
// const { Avenger } = require("./Avenger");
const array = [];

array[0] = new Avenger(
  "Tony Stark",
  "Iron Man",
  "man",
  38,
  ["intelligence", "durability", "magnetism"],
  120
);
array[1] = new Avenger(
  "Natasha Romanoff",
  "Black Widow",
  "woman",
  35,
  ["agility", "martial arts"],
  75
);
array[2] = new Avenger(
  "Carol Danvers",
  "Captain Marvel",
  "woman",
  27,
  ["durability", "flight", "interstellar travel"],
  95
);

const team = new Team(1, array);


console.count("Battle");
const clonedTeam = team.clone();
team.battle({ damage: 25 });
team.calculateLosses(clonedTeam)

console.count("Battle");
const afterFirstBattleClone = team.clone();
team.battle({ damage: 80 });
team.calculateLosses(afterFirstBattleClone);
