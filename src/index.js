import './style.css';
import { displayWeather } from './locationWeather';

function displayPic(keyword){
  return fetch(`https://api.weatherapi.com/v1/forecast.json?key=6084e2b288204bdd8d175635233007&q=${keyword}&days=3`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        console.log(response)
        displayWeather(response)
         
    })
    .catch(function(error) {
        console.log('Error fetching data:', error);
        
      });
}


const form =document.querySelector('.form')
const input =document.getElementById('city')
const disap=document.querySelector('.disap')
const searchButton=document.querySelector('.searchButton')
const output =document.querySelector('.output')
const dataContainer = document.querySelector('.data');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
        if(disap.style.display!=='none'){
            disap.style.display='none'
            output.style.display='block'
            moveButton()
            displayPic(input.value)
            
            dataContainer.classList.add('glide-from-right');
            
        }else{
            
            disap.style.display='block'
            output.style.display='none'
            returnButton()
        }
    
})
function moveButton(){
    form.style.top='90%'
    searchButton.style.width='30vw'
    searchButton.style.fontSize='40px'
}
function returnButton(){
    form.style.top='50%'
    searchButton.style.width='50%'
    searchButton.style.fontSize='2vw'
}







