
/*
  Task name: Object to string
*/

const {Avenger} = require("./Avenger");

const stark = new Avenger({
  name: 'Tony Stark',
  alias: 'Iron Man',
  gender: 'man',
  age: 38,
  powers: ["intelligence", "durability", "magnetism"]
})

const natasha = new Avenger({
  name: 'Natasha Romanoff',
  alias: 'Black Widow',
  gender: 'woman',
  age: 35,
  powers: ["agility", "martial arts"]
})

const examine = (avenger) => {
  console.count('Avenger');
  console.group('*** Avenger introduced ***');
  console.log(avenger.toString());
  console.groupEnd();
  console.group('*** Avenger called ***');
  console.log(avenger());
  console.groupEnd();
  console.group('*** Avenger\'s internals ***');
  console.log(avenger, '\n');
  console.groupEnd();
}

examine(stark);

examine(natasha);

