let superhero;
let idLife;
let idFeet;
let feedButton;

class Human {
  feedButton = false;
  superhero = false;
  idLife;
  idFeet;
  constructor(img, firstName, lastName, gender, age, calories) {
    this.img = img;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
  }
  sleepFor() {
    nomNomNom.innerHTML = `I'm sleeping`;
    nomNomNom.classList.add("show");
    document.querySelector("img").src = "assets/images/human.jpg";
    setTimeout(() => {
      if (!this.superhero) {
        document.querySelector("img").src = "assets/images/human.jpg";
      } else if (human.calories > 500 && this.superhero) {
        document.querySelector("img").src = "assets/images/superhero.jpg";
        document.querySelector("#fly").classList.add("show");
        document.querySelector("#fight").classList.add("show");
      } else if (human.calories < 500 && this.superhero) {
        document.querySelector("img").src = "assets/images/superhero.jpg";
        document.querySelector("#fly").classList.add("show");
        document.querySelector("#fight").classList.add("show");
      }
      nomNomNom.innerHTML = `I'm awake now`;
      setTimeout(() => {
        nomNomNom.classList.remove("show");
      }, 2000);
    },  10000);
  }
  feed() {
    if (!this.feedButton) {
      nomNomNom.innerHTML = `Nom Nom Nom`;
      if (human.calories < 500) {
        nomNomNom.classList.add("show");
        document.querySelector("img").src = "assets/images/human.jpg";

        idFeet = setInterval(() => {
          this.calories += 200 / 100;
          document.querySelector(".calories").innerHTML = 
            Math.floor(this.calories)
        }, 100);

        setTimeout(() => {
          if (human.calories < 500 && !this.superhero) {
            nomNomNom.classList.remove("show");
            document.querySelector("img").src = "assets/images/human.jpg";
          } else if (human.calories > 500 && !this.superhero) {
            nomNomNom.classList.remove("show");
            document.querySelector("img").src = "assets/images/human.jpg";
          } else if (human.calories > 500 && this.superhero) {
            nomNomNom.classList.remove("show");
            document.querySelector("img").src = "assets/images/superhero.jpg";
          }
          clearInterval(idFeet);
        }, 10000);
      } else if (human.calories > 500) {
        nomNomNom.innerHTML = `I'm full`;
        nomNomNom.classList.add("show");
        setTimeout(() => {
          nomNomNom.classList.remove("show");
        }, 3000);
      }
    } else{
      clearInterval(this.idFeet)
    }
  }
  checkCalories() {
    document.querySelector('#hungry').classList.add('show')
  }
  startLife() {
    this.idLife = setInterval(() => {
      this.calories -= 200 / (100 * 60);
      document.querySelector(".calories").innerHTML = Math.floor(this.calories);
    }, 10);
  }

  startHero() {
    this.superhero = true;
  }
}
class Superhero extends Human {
  constructor(hum) {
    super(
      hum.img,
      hum.firstName,
      hum.lastName,
      hum.gender,
      hum.age,
      hum.calories
    );
  }
  fly() {
    nomNomNom.innerHTML = `I'm flying`;
    nomNomNom.classList.add("show");
    document.querySelector("img").src = "assets/images/superhero.jpg";
    setTimeout(() => {
      document.querySelector("img").src = "assets/images/superhero.jpg";
      nomNomNom.remove("show");
    }, 10000);
    
  }
  fightWithEvil() {
    nomNomNom.innerHTML = `Khhhh-chh... Bang-g-g-g... Evil is defeated!`;
    document.querySelector("img").src = "assets/images/superhero.jpg";
    setTimeout(() => {
      document.querySelector("img").src = "assets/images/superhero.jpg";
      nomNomNom.classList.remove("show");
    }, 3500);
  }
}

let human = new Human(
  "assets/images/human.jpg",
  "Elena",
  "Pudge",
  "male",
  25,
  300
);

let createText = `
<div id="nom_nom_nom" class="hide"></div>
<div id="hungry" class="hide">I'm hungry, please feed me</div>
<h2 id="programmer">Human</h2>
<button onclick="intoSuper()" id="turn">Turn into superhero</button>
<div class="card">
  <img src="${human.img}" alt="human" />
</div>
<p>First Name: ${human.firstName}</p>
<p>Last Name: ${human.lastName}</p>
<p>Gender: ${human.gender}</p>
<p>Age: ${human.age}</p>
<p class="calories">Calories: ${human.calories}</p>
<button onclick="human.sleepFor()" id="sleep">Sleep</button>
<button onclick="human.feed()" id="feed">Feed</button>
<button class="hide" id="fly" onclick="superhero.fly()">Fly</button>
<button class="hide" id="fight" onclick="superhero.fightWithEvil()">Fight with Evil</button>`;
let box = document.querySelector(".box");

box.insertAdjacentHTML("afterbegin", createText);

let nomNomNom = document.querySelector("#nom_nom_nom");
let hungry = document.querySelector('#hungry');

let turnInto = document.querySelector(".turn_into");

let check = true;

human.startLife();
  setTimeout(() => {
      human.checkCalories();
}, 5000);


function intoSuper() {
  if (human.calories <= 500) {
    nomNomNom.innerHTML = `I'm still hungry, please feed me`;
    nomNomNom.classList.add("show");
    setTimeout(() => {
      nomNomNom.classList.remove("show");
    }, 2000);
  } else if (human.calories > 500) {
    superhero = new Superhero(human);
    human.startHero();
    document.querySelector("img").src = "assets/images/superhero.jpg";
    document.querySelector("#fly").classList.add("show");
    document.querySelector("#fight").classList.add("show");
  }
}

setInterval(() => {
  if (human.superhero) {
    document.querySelector("#programmer").innerHTML = `Superhero`;
  }
  if(human.calories >= 500){
    setTimeout(() =>{
      document.querySelector('#hungry').classList.remove('show')
    },3500)
  }
}, 100);