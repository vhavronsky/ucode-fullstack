fetch('http://api.openweathermap.org/data/2.5/forecast?id=703448&appid=4ce78f1954cfb858ad7fbfdd594421a5')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        // NAME OF CITY
        document.querySelector('.kiev').textContent = data.city.name;
        // DATE 
        document.querySelector('.date-0').textContent = data.list[0].dt_txt.slice(5, 10);
        document.querySelector('.date-1').textContent = data.list[8].dt_txt.slice(5, 10); 
        document.querySelector('.date-2').textContent = data.list[16].dt_txt.slice(5, 10); 
        document.querySelector('.date-3').textContent = data.list[24].dt_txt.slice(5, 10);
        document.querySelector('.date-4').textContent = data.list[32].dt_txt.slice(5, 10);
        document.querySelector('.date-5').textContent = data.list[39].dt_txt.slice(5, 10);
        // TEMPERATURE
        document.querySelector('.temp-0').innerHTML = '+' + Math.round(data.list[0].main.temp - 273) + '&deg'; 
        document.querySelector('.temp-1').innerHTML = '+' + Math.round(data.list[8].main.temp - 273) + '&deg'; 
        document.querySelector('.temp-2').innerHTML = '+' + Math.round(data.list[16].main.temp - 273) + '&deg'; 
        document.querySelector('.temp-3').innerHTML = '+' + Math.round(data.list[24].main.temp - 273) + '&deg'; 
        document.querySelector('.temp-4').innerHTML = '+' + Math.round(data.list[32].main.temp - 273) + '&deg'; 
        document.querySelector('.temp-5').innerHTML = '+' + Math.round(data.list[39].main.temp - 273) + '&deg'; 
        // DESCRIPTION
        document.querySelector('.desc-0').innerHTML = data.list[0].weather[0].description; 
        document.querySelector('.desc-1').innerHTML = data.list[8].weather[0].description; 
        document.querySelector('.desc-2').innerHTML = data.list[16].weather[0].description; 
        document.querySelector('.desc-3').innerHTML = data.list[24].weather[0].description; 
        document.querySelector('.desc-4').innerHTML = data.list[32].weather[0].description; 
        document.querySelector('.desc-5').innerHTML = data.list[39].weather[0].description; 
        // IMAGES
        document.querySelector('.img-0').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png">`;
        document.querySelector('.img-1').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png">`;
        document.querySelector('.img-2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png">`;
        document.querySelector('.img-3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png">`;
        document.querySelector('.img-4').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png">`;
        document.querySelector('.img-5').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png">`; 
    })
    .catch(err => console.log('Error' + err))