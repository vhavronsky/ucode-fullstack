let input = document.querySelector('textarea');
let note = document.querySelector(".notes-area");

function getFormattedDate(dateObj) {
    let options = {
        weekday: 'long'
    }
    let my_data = {
        data: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear(),
        hours: dateObj.getHours(),
        minutes: dateObj.getMinutes(),
        weekday: dateObj.toLocaleString("en-US", options),
    }
    function hour(a) {
        return String(a).length === 1 ? '0' + a : a;
    }
    return `${my_data.data}.${hour(my_data.month)}.${my_data.year} ${hour(my_data.hours)}:${hour(my_data.minutes)} ${my_data.weekday}`
}



let count = 0;
render();

function addCookie() {
    if(!input.value) {
        alert(`It's empty. Try to input something in "Text input".`);
    } else if (input.value) {
        localStorage.setItem(Date.now(), input.value)
    }
    input.value = '';
    render();
}

function clearNote() {
    let sure = confirm(`Are you sure?`);
    if(sure) {
        localStorage.clear();
    }
    render();
}

function render(){
    let render = '';
    if (localStorage.length > 0){
       storageToArray(localStorage).map(item => {
          render += `--> ${item[1]} [${getFormattedDate(new Date(+item[0]))}]\n`;
       });
    } else {
        render += '[Empty]';
    }
    note.innerHTML = render;
}

function storageToArray(arr){
    console.dir(arr);
    return Object.entries(arr);
} 



