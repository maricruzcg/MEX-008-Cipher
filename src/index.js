const inputName = document.getElementById('input-name');
const buttonSesion = document.getElementById('button-sesion');
const welcome = document.getElementById('welcome');
const description = document.getElementById('description');
const cifrar = document.getElementById('cifrar');

const getName = () => {
  description.classList.add('page-two');
  cifrar.classList.remove('page-two');
  welcome.innerHTML = inputName.value + '<br/>' + 'Bienvenido(a)';
}

buttonSesion.addEventListener('click', getName);
