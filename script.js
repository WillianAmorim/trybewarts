const button = document.getElementById('button-header');
const inputEmail = document.getElementById('input-email');

const checkInputs = () => {
  if ((inputEmail.value.includes('@', '.com'))) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

button.addEventListener('click', checkInputs);