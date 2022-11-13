const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
const message = document.querySelector('.message');

// only one radio input can be checked
inputs.forEach(input => {
    input.addEventListener('click', () => {
        inputs[0].checked = false;
        inputs[1].checked = false;
        inputs[2].checked = false;
        input.checked = true;
    });
});

btn.addEventListener('click', () => {
    inputs.forEach(input => {
        if (input.checked) {
            if (inputs[1].checked) {
                message.textContent = 'Absolutely right!';
            } else {
                message.textContent = 'Shame on you! Go and watch Avengers!';
            }
        } 
    })
})
