export function input() {
    const input = document.querySelector('.greeting-container input');
  
    input.addEventListener('input', (e) => {
      localStorage.setItem('greeting', e.target.value);
    });
  
    input.value = localStorage.getItem('greeting');
  }
  