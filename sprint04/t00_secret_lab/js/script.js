const lab = document.querySelector('#lab');
const hero = document.querySelector('#hero');

function transformation() {    
    if (hero.innerText === 'Bruce Banner') {
        lab.style.background = '#70964b';
        hero.innerText = 'HULK';
        hero.style.fontSize = '130px'
        hero.style.letterSpacing = '6px'
    } else {
        lab.style.background = '#ffb300';
        hero.innerText = 'Bruce Banner';
        hero.style.fontSize = '60px'
        hero.style.letterSpacing = '2px'
    }
}


/* 
const lab = document.querySelector('#lab'),
    hero = document.querySelector('#hero');

function transformation() {
    if (hero.innerHTML === `Hulk`) {
        hero.innerHTML = `Bruce Banner`;
        hero.style.fontSize = `60px`;
        hero.style.letterSpacing = `2px`;
        lab.style.backgroundColor = `#ffb300`;
    } else {
        hero.innerHTML = `Hulk`;
        hero.style.fontSize = `130px`;
        hero.style.letterSpacing = `6px`;
        lab.style.backgroundColor = `#70964b`;
    }
}
*/