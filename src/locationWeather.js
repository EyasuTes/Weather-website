import './style.css';
import { justValues } from './addValues';
const output =document.querySelector('.output')
const data =document.querySelector('.data')
const dataHeading=document.querySelector('.dataHeading')
let count=0;
export async function displayWeather(response) {
    if(count>0){
        justValues(response)
        console.log('this is working ')

    }else{
        await dataContainers();
        await heading(response);
        await cell1(response);
        await cell2(response)
        await cell3(response)
        await cell4(response)
        await cell5(response)
        await cell6(response)
    }
    
}

function heading(response){
    return new Promise(function(resolve){
        
        const header =document.querySelector('.heading')
        header.textContent=response.current.condition.text
        const imgContainer=document.querySelector('.imgContainer')
        imgContainer.src=response.current.condition.icon
        resolve();
    })
    
}
function cell1(response){
    return new Promise(function(resolve){
        const cell1 =document.querySelector('.cell1')
        const cell11 =document.createElement('div')
        cell11.classList.add('cell11')
        cell11.textContent='Name: '+response.location.name
        const cell12 =document.createElement('div')
        cell12.classList.add('cell12')
        cell12.textContent='Continent: '+response.location.tz_id
        const cell13 =document.createElement('div')
        cell13.classList.add('cell13')
        cell13.textContent='Local-Time: '+response.location.localtime
        cell1.appendChild(cell11)
        cell1.appendChild(cell12)
        cell1.appendChild(cell13)
        resolve();
    })
    
}
function cell2(response){
    return new Promise(function(resolve){
        const cell2 =document.querySelector('.cell2')
        const cell21 =document.createElement('div')
        cell21.classList.add('cell21')
        cell21.textContent='Temp in Celsius: '+response.current.temp_c
        const cell22 =document.createElement('div')
        cell22.classList.add('cell22')
        cell22.textContent='Temp in Ferhanite: '+response.current.temp_f
        
        
        cell2.appendChild(cell21)
        cell2.appendChild(cell22)
       
        resolve();
    })
    
}
function cell3(response){
    return new Promise(function(resolve){
        const cell3 =document.querySelector('.cell3')
        const cell31 =document.createElement('div')
        cell31.classList.add('cell31')
        cell31.textContent='Wind Speed kph: '+response.current.wind_kph
        const cell32 =document.createElement('div')
        cell32.classList.add('cell32')
        cell32.textContent='Wind Speed mph: '+response.current.wind_mph
        
        
        cell3.appendChild(cell31)
        cell3.appendChild(cell32)
       
        resolve();
    })
    
}
function cell4(response){
    return new Promise(function(resolve){
        const cell4 =document.querySelector('.cell4')
        const cell41 =document.createElement('div')
        cell41.classList.add('cell41')
        cell41.textContent='Gust Speed kph: '+response.current.gust_kph
        const cell42 =document.createElement('div')
        cell42.classList.add('cell42')
        cell42.textContent='Gust Speed mph: '+response.current.gust_mph
        
        
        cell4.appendChild(cell41)
        cell4.appendChild(cell42)
       
        resolve();
    })
    
}
function cell5(response){
    return new Promise(function(resolve){
        const cell5 =document.querySelector('.cell5')
        const cell51 =document.createElement('div')
        cell51.classList.add('cell51')
        cell51.textContent='feels like temp in C: '+response.current.feelslike_c
        const cell52 =document.createElement('div')
        cell52.classList.add('cell52')
        cell52.textContent='feels like temp in f: '+response.current.feelslike_f
        
        
        cell5.appendChild(cell51)
        cell5.appendChild(cell52)
       
        resolve();
    })
    
}
function cell6(response){
    return new Promise(function(resolve){
        const cell6 =document.querySelector('.cell6')
        const cell61 =document.createElement('div')
        cell61.classList.add('cell61')
        cell61.textContent='Humidity: '+response.current.humidity
        
         
        cell6.appendChild(cell61)
        
       
        resolve();
    })
    
}
function dataContainers(){
    return new Promise(function(resolve){
        count++;
        const dataHeading =document.createElement('div')
        dataHeading.classList.add('dataHeading')
        const heading =document.createElement('div')
        heading.classList.add('heading')
        const imgContainer=document.createElement('img')
        imgContainer.classList.add('imgContainer')
        
        
        
        dataHeading.appendChild(heading)
        dataHeading.appendChild(imgContainer)
        data.appendChild(dataHeading)

        const cells =document.createElement('div')
        cells.classList.add('cells')
        data.appendChild(cells)
        cellContainers()
        resolve();
    })
    

}
function cellContainers(){
    return new Promise(function(resolve){
        const cells=document.querySelector('.cells')
        for(let i=1; i<7; i++){
            const cell=document.createElement('div')
            cell.classList.add('cell'+i)
            cell.setAttribute('id', 'cell');
            cells.appendChild(cell)
        }
        resolve();
    })
        
    
}

