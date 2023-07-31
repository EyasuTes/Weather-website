import './style.css';

export function justValues(response){
    const header =document.querySelector('.heading')
    header.textContent=response.current.condition.text
    const imgContainer=document.querySelector('.imgContainer')
    imgContainer.src=response.current.condition.icon
    const cell11 =document.querySelector('.cell11')
    cell11.textContent='Name: '+response.location.name
    const cell12 =document.querySelector('.cell12')
    cell12.textContent='Continent: '+response.location.tz_id
    const cell13 =document.querySelector('.cell13')
    cell13.textContent='Local-Time: '+response.location.localtime
    const cell21 =document.querySelector('.cell21')
    cell21.textContent='Temp in Celsius: '+response.current.temp_c
    const cell22 =document.querySelector('.cell32')
    cell22.textContent='Temp in Ferhanite: '+response.current.temp_f
    const cell31 =document.querySelector('.cell31')
    cell31.textContent='Wind Speed kph: '+response.current.wind_kph
    const cell32 =document.querySelector('.cell32')
    cell32.textContent='Wind Speed mph: '+response.current.wind_mph
    const cell41 =document.querySelector('.cell41')
    cell41.textContent='Gust Speed kph: '+response.current.gust_kph
    const cell42 =document.querySelector('.cell42')
    cell42.textContent='Gust Speed mph: '+response.current.gust_mph
    const cell51 =document.querySelector('.cell51')
    cell51.textContent='feels like temp in C: '+response.current.feelslike_c
    const cell52 =document.querySelector('.cell52')
    cell52.textContent='feels like temp in f: '+response.current.feelslike_f
    const cell61 =document.querySelector('.cell61')
    cell61.textContent='Humidity: '+response.current.humidity
}