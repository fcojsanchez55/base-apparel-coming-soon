//VARIABLE
const email = document.querySelector('#email');
const form = document.querySelector('#form');



form.addEventListener('input', (e) =>{
    e.preventDefault();
    if (!email.value.match(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)) {
        showAlert()
        return false;
    } else{
        showAlert(error.textContent = '')
        return;
        
    }

})
function showAlert() {
    const error = document.createElement('P');
        email.style.border = "solid 3px";
        email.style.borderColor = "#fa6161";
        error.textContent = 'Please provid a valid email';
        error.classList.add('error-email');
        form.appendChild(error);
}