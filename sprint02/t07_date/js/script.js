function getFormattedDate(dateObject) {
    let date = dateObject.getDate();
    if(date < 10) {
        date = '0' + date;
    }
    let month = dateObject.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }
    let year = dateObject.getFullYear();

    let hours = dateObject.getHours();
    if(hours < 10) {
        hours = '0' + hours;
    }
    let minutes = dateObject.getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    let week = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let day = week[dateObject.getDay()];

    return `${date}.${month}.${year} ${hours}:${minutes} ${day}`;
}

// TESTING
const date0 = new Date(1993, 11, 1, 19, 19);
const date1 = new Date(1998, 0, -33);
const date3 = new Date(2004, 10, 01, 12, 24);

console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday
console.log(getFormattedDate(date3));