const signUp = document.querySelector("#signUp");
const signIn = document.querySelector("#signIn");
const passwordIcon = document.querySelectorAll('.password__icon');
// const authPassword = document.querySelectorAll('.auth__password');
const loginButton = document.querySelector(".btn-outline-dark");

// When clicking the sign-up button
signUp.addEventListener('click', () => {
    document.querySelector('.login__form').classList.remove('active');
    document.querySelector('.register__form').classList.add('active');
    document.querySelector('.ball').classList.add('register');
    document.querySelector('.ball').classList.remove('login');
});

// When clicking the sign-in button
signIn.addEventListener('click', () => {
    document.querySelector('.login__form').classList.add('active');
    document.querySelector('.register__form').classList.remove('active');
    document.querySelector('.ball').classList.add('login');
    document.querySelector('.ball').classList.remove('register');
});

// Change hidden password to visible password
passwordIcon.forEach(icon => {
    icon.addEventListener('click', (e) => {
        const input = e.currentTarget.parentNode.querySelector('input');
        if (e.target.classList.contains('bi-eye-slash')) {
            e.target.classList.remove('bi-eye-slash');
            e.target.classList.add('bi-eye');
            input.type = 'text';
        } else {
            e.target.classList.add('bi-eye-slash');
            e.target.classList.remove('bi-eye');
            input.type = 'password';
        }
    });
});

// Redirect to index.html when login button is clicked
loginButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    window.location.href = 'index.html';
});
