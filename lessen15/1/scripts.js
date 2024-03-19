const widgetMain = document.querySelector('.widgetMain');
const widgetSide = document.querySelector('.widgetSide');


const widgetMainWork = (data) => {
    const date = new Date()
    widgetMain.innerHTML = `
    <div>
        <div class = "sityNameAndTime">
            <p>${data.city.name}</p>
            <div>${date.toLocaleTimeString()}</div>
        </div>
        <div class = "imgInformation">
            <img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="weatherIcon">
            <p>${data.list[0].weather[0].main}</p>
            <p>${data.list[0].main.temp}°C</p>
        </div>
        <div class = "mainWindSpeed">
            <p class = "wordSpeed">speed</p>
            <p class = "speedMS">${data.list[0].wind.speed} m/s</p>  
        </div> 
    </div>
    `
}

const widgetSideWork = (data) => {
    for (let i = 8; i < data.list.length; i += 8){
    widgetSide.innerHTML += `
        <div class="row">
            <div>
            <p>${data.list[i].dt_txt.split(' ')[0]}</p>
            <p>${data.list[i].dt_txt.split(' ')[1]}</p>
            </div>
            <div class = "sideImg"><img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="weatherIcon"></div>
            <div class = "sideC"><p>${data.list[i].main.temp}°C</p></div>
        </div>
        
        `
    }
}

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric')
.then((response) =>  response.json())
.then((data) => {
    widgetMainWork(data);
    widgetSideWork(data);
})

