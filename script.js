const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const msg = document.querySelectorAll('.error-msg');

button.addEventListener('click', event =>{
  
  for (let i = 0; i < inputs.length; i++) {
    if(!inputs[i].checkValidity()){
      inputs[i].classList.add('input-error');
      msg[i].classList.add('on');

      inputs[i].addEventListener('input', event =>{
        inputs[i].classList.remove('input-error');
        msg[i].classList.remove('on')
      });
    }
  }
});