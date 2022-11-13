let animal, gender, age;

const regexAnimal = /^[A-Za-z]{1,20}$/;
animal = prompt("What animal is the superhero most similar to?", "bat");
if (!regexAnimal.test(animal)) {
    alert("Enter correct animal!");
    throw false;
 } 

const regexGender = /^(male|female|.{0})$/i;
gender = prompt("Is the superhero male or female? Leave blank if unknown or other.", "male");
if (!regexGender.test(gender)) {
    alert("Enter correct gender!");
    throw false;
} 

const regexAge = /^[^0][0-9]{0,5}$/
age = prompt("How old is the superhero?", "28");
if (!regexAge.test(age)) {
    alert("Enter correct age!");
    throw false;
} 

let genderLower = gender.toLowerCase();

if (genderLower == "male" && age < 18) {
    alert(`The superhero name is: ${animal}-boy!`);
} 
else if(genderLower == "male" && age >= 18) {
    alert(`The superhero name is: ${animal}-man!`);
} 
else if(genderLower == "female" && age < 18) {
    alert(`The superhero name is: ${animal}-girl!`);
} 
else if(genderLower == "female" && age >= 18) {
    alert(`The superhero name is: ${animal}-woman!`);
} 
else if(genderLower == "" && age < 18) {
    alert(`The superhero name is: ${animal}-kid!`);
} 
else if(genderLower == "" && age >= 18) {
    alert(`The superhero name is: ${animal}-hero!`);
}

