const contactForm = document.querySelector('.form');
let user = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
const successMessage = document.querySelector('.success-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        user: user.value,
        email: email.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        if (xhr.responseText == 'success') {
            successMessage.classList.remove('hidden');
            user.value = '';
            email.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));

})