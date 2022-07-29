const button = document.querySelector('.formcontato__botao');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const texto = document.querySelector('#mensagem');

button.addEventListener('click', ()=> {
    if( nome.value !== '' && email.value !== '' && assunto.value !== '' ) {
        nome.value = '';
        email.value = '';
        assunto.value = '';
        alert('Mensagem enviada com sucesso!');
    }

})