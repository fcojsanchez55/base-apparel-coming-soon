//VARIABLE
const email = document.querySelector('#email');
const form = document.querySelector('#form');
const alertImage = document.querySelector('#error-icon');
const error = document.querySelector('.error-email');



form.addEventListener('input', (e) =>{
    e.preventDefault();
    if (!email.value.match(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)) {
        
        return false;
    }
    error.remove();
    alertImage.remove();
    return true
})