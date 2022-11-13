const ul = document.querySelector('ul')
const li = document.querySelectorAll('li')
    
for(let liItem of li) {

    let dataElement = liItem.getAttribute('data-element');

    // checking class attribute
    if(liItem.classList == 'good'
        || liItem.classList == 'evil'
        || liItem.classList == 'unknown'
    ) {
    } else {
        liItem.classList = 'unknown';
    }
    // ================================

    // checking data-element attribute
    if(!liItem.attributes[1]) {
        liItem.setAttribute('data-element', 'none');
    }
    // ================================

    // append circle
    liItem.appendChild(document.createElement('br'));
    dataElement = liItem.getAttribute('data-element').split(' ');
    
    for(let i = 0; i < dataElement.length; i++) {
        const div = document.createElement('div');
        liItem.appendChild(div);
        div.setAttribute('class', `elem ${dataElement[i]}`);
        // to 'none' circle
        if(dataElement[i] == 'none') {
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'line');
            div.appendChild(div2);
        }
    }
}
