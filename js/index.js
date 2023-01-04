const form = document.getElementById('form');
const uname = document.getElementById('uname');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)")|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const unameValue = uname.value.trim();
    const emailValue = email.value.trim();
    const msgValue = msg.value.trim();

    if (unameValue === '') {
        setError(uname, 'Name is required');
    } else {
        setSuccess(uname);
    }
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'provide a valid email');
    } else {
        setSuccess(email);
    }
    if (msgValue === '') {
        setError(msg, 'Input message');
    } else {
        setSuccess(msg);
    }
};