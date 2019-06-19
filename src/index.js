const inputName = document.getElementById('input-name');
const buttonSesion = document.getElementById('button-sesion');
const welcome = document.getElementById('welcome');
const description = document.getElementById('description');
const code = document.getElementById('cifrar');
const inputCode = document.getElementById('input-cifrar');
const offsetSecurity1 = document.getElementById('number-security1');
const buttonCode = document.getElementById('button-code');
const resultCode = document.getElementById('result-code');
const inputDecode = document.getElementById('input-descifrar');
const offsetSecurity2 = document.getElementById('number-security2');
const buttonDecode = document.getElementById('button-decode');
const resultDecode = document.getElementById('result-decode');

const getName = () => {
  description.classList.add('page-two');
  code.classList.remove('page-two');
  welcome.innerHTML = inputName.value + '<br/>' + 'Bienvenido(a)';
}

const getText = () => {
  resultCode.innerHTML = 'Tu información ha sido cifrada exitosamente' + '<br/>' + window.cipher.encode(parseInt(offsetSecurity1.value), inputCode.value);
}

const getTextDecode = () => {
  resultDecode.innerHTML = 'Tu código ha sido descifrado exitosamente' + '<br/>' + window.cipher.decode(parseInt(offsetSecurity2.value), inputDecode.value);

}

buttonDecode.addEventListener('click',getTextDecode);
buttonCode.addEventListener('click', getText);
buttonSesion.addEventListener('click', getName);
