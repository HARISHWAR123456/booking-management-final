/* Enhanced JS (scripts.js) */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Scripts loaded successfully!');

   
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (!username || !password) {
                alert('Please fill in all fields');
            } else {
                alert('Login successful!');
            }
        });
    }

    
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                alert('Passwords do not match');
            } else {
                alert('Registration successful!');
            }
        });
    }

   function getMovieName(){
    const urlParams = new URLSearchParams(window.location.search);
    const movieName = urlParams.get('movie');  // Retrieve the 'movie' query parameter
    return movieName;

   }
   document.getElementById('movie-name').value = getMovieName();
});


