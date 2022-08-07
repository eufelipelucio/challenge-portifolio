const button = document.querySelector('.formcontato__botao');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const texto = document.querySelector('#mensagem');

button.addEventListener('click', ()=> {
    if( nome.value !== '' && assunto.value !== '' && email.value !== '' ) {
        if(validEmail(email.value)){
        nome.value = '';
        email.value = '';
        assunto.value = '';
        texto.value = '';
        alert('Mensagem enviada com sucesso!');
        }else{
            alert('Email inválido!');
        }
    }
   
})

function validEmail(email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}