let sort = document.getElementById('placeholder'),
    table = document.getElementById('notification');

let thisId = '';
let sorting = {name: 'Desc', strength: 'Asc', age: 'Asc'};

let heroes = [
	{name: 'Black Panther', strength: 66, age: 53},
	{name: 'Captain America', strength: 79, age: 137},
	{name: 'Captain Marvel', strength: 97, age: 26},
	{name: 'Hulk', strength: 80, age: 49},
	{name: 'Iron Man', strength: 88, age: 48},
	{name: 'Spider-Man', strength: 78, age: 16},
	{name: 'Thanos', strength: 99, age: 1000},
	{name: 'Thor', strength: 95, age: 1000},
	{name: 'Yon-Rogg', strength: 73, age: 52},
];

sort.innerHTML = `Sorting by ... , order: ...`
table.innerHTML = render(heroes);

function render(heroes){
    let result = '<div class="main">'
    result += '<table>\n';
    result +='<tr><th id="name" onclick="clickName()">Name</th><th id="strength" onclick="clickStrength()">Strength</th><th id="age" onclick="clickAge()">Age</th>';
    heroes.forEach(function(item){
        result += '<tr><td>' + item.name + '</td><td>' + item.strength + '</td><td>' + item.age + '</td></tr>'
    });
    result += '</table>'
    result += '</div>'
    return result
}

function clickName(){
    thisId = 'name';
    switchSorting();
}
function clickStrength(){
    thisId = 'strength';
    switchSorting();
}
function clickAge(){
    thisId = 'age';
    switchSorting();
}

function compareHeroes(hero1, hero2){
    if(hero1[thisId] > hero2[thisId]) return 1;
    if(hero1[thisId] === hero2[thisId]) return 0;
    if(hero1[thisId] < hero2[thisId]) return -1;
}

function switchSorting(){
    heroes.sort(compareHeroes);
    if (sorting[thisId] === 'Asc'){
        addNot();
        sorting = {name: 'Asc', strength: 'Asc', age: 'Asc'};
        sorting[thisId] = 'Desc';
    } else {
        addNot();
        sorting = {name: 'Asc', strength: 'Asc', age: 'Asc'};
        heroes.reverse();
        sorting[thisId] = 'Asc';
    }
    table.innerHTML = render(heroes);
}
function addNot(){
    sort.innerHTML = `Sorting by ${thisId[0].toUpperCase() + thisId.slice(1)}, order: ${sorting[thisId]}`;
}
