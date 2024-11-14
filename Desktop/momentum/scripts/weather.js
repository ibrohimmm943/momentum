export function weather() {
    const input = document.querySelector('.weather .city');
    const icon = document.querySelector('.weather-icon');
    const error = document.querySelector('.weather-error');
    const temperature = document.querySelector('.temperature');
    const weatherDesc = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
  
    function initail() {
      const city = getFromLocalStorage('city') || 'Almalyk';
  
      if(city) {
        setToLocalStorage('city', city);
      }
  
      input.value = city;
      setToLocalStorageFromInput(input);
    }
  
  
    initail();
  }
  
  function setToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }
  
  function getFromLocalStorage(key) {
    return localStorage.getItem(key);
  }
  
  function setToLocalStorageFromInput(inp) {
    inp.addEventListener('input', (e) => {
      setToLocalStorage('city', e.target.value);
  
      const url = URL(e.target.value);
  
      console.log(url);
  
    })
  }
  
  function URL(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5b86ed4a9143b8a6ee4cbe2197c600d`
  }
  
  // d5b86ed4a9143b8a6ee4cbe2197c600d
  