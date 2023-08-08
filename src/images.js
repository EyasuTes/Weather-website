import './style.css';

const accessKey='U_fj0Vki-9VfrTdxSerY6Emu0MK8zxkx0rGpMyfWzZQ'
export function imageDisplay(keyword){
    fetch(`https://api.unsplash.com/search/photos?query=${keyword}`, {
        headers: {
          'Authorization': `Client-ID ${accessKey}`
        }
      })
      .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        return response.json();
      })
      .then(function(response) {
          console.log(response)
          displayImage(response)
          
           
      })
        .catch(error => console.error(error));
  }
function displayImage(response){
    const img =document.querySelector('.preImage')
    img.src=response.results[0].urls.regular
}