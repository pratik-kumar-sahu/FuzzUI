// logic for input form -------------------->

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const mobile = document.querySelector('#mobile');
const birthdate = document.querySelector('#birthdate');
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const profession = document.querySelector('#profession');
const terms = document.querySelector('#terms');
const errorMessage = document.querySelector('#error');

document.getElementById('submit').disabled = true;
errorMessage.style.display = 'none';

const checkForValidity = () => {
    document.getElementById('submit').disabled = true;
    if ([name, email, password, mobile, birthdate, profession].map((e) => e.value.trim().length).includes(0)) {
        document.getElementById('submit').disabled = true;
        document.getElementById('submit').classList.remove('btn-primary-outline');
        errorMessage.style.display = 'block';
    } else if (![name, email, password, mobile, birthdate, profession].map((e) => e.value.trim().length).includes(0)) {
        if ([choice1.checked, choice2.checked].includes(true) && terms.checked) {
            document.getElementById('submit').disabled = false;
            document.getElementById('submit').classList.add('btn-primary-outline');
            errorMessage.style.display = 'none';
        } else {
            document.getElementById('submit').disabled = true;
            document.getElementById('submit').classList.remove('btn-primary-outline');
            errorMessage.style.display = 'block';
        }
    }
};

// logic for input form --------------------> end
