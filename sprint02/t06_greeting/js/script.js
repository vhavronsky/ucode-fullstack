let firstName = prompt("Enter your first name", 'John');
let lastName = prompt("Enter your last name", "Mason");

// isNaN(firstName);
// isNaN(lastName);

const regex = /^[a-z]*$/i;

if (firstName && regex.test(firstName) && lastName && regex.test(lastName)) {
    let firstName2 = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    let lastName2 = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    console.log(`Welcome, ${firstName2} ${lastName2}`);
    alert(`Welcome, ${firstName2} ${lastName2}`);
} else {
    console.log('Wrong input!');
    alert('Wrong input!');
}


















