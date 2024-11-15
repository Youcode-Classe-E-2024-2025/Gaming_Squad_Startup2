const signUpLink = document.querySelector('.signUpBtn-link');
const signInLink = document.querySelector('.signInBtn-link');
const btnLogin = document.querySelector('.btn-Login');
const signUpForm = document.getElementById('signUpForm');
const loginForm = document.getElementById('loginForm');
const inputs = document.querySelectorAll("input");

if (signUpLink && signInLink) {
    signUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.sign-in').style.transform = 'translateY(-100%)';
        document.querySelector('.sign-up').style.transform = 'translateY(-100%)';
    });

    signInLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.sign-in').style.transform = 'translateY(0)';
        document.querySelector('.sign-up').style.transform = 'translateY(100%)';
    });
}


signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUserName = document.getElementById('newUserName').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUserName && newPassword) {
        localStorage.setItem("Username", newUserName);
        localStorage.setItem("Password", newPassword);
        alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        signUpForm.reset();
    }
});
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('Password').value;

    const storedUser = localStorage.getItem("Username");
    const storedPassword = localStorage.getItem("Password");
    
    if (userName === storedUser && password === storedPassword) {
        alert("Connexion réussie");
    } else if (userName === "admin" && password === "admin") {
        window.location.pathname = '/assets/pages/products/products.html';
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect");
    }
});
inputs.forEach(input  => {
    const label = input.nextElementSibling; 

    input.addEventListener('focus', () => {
        label.style.transform = 'translateY(-100%)';  
        label.style.fontSize = '20px'; 
        label.style.top = '0'; 
        label.style.color = '#EF230C'; 
    });
    input.addEventListener('blur', () => {
        if (input.value === '') {
            label.style.transform = 'translateY(20%)';  
            label.style.color = '#ffff'
       
        }
    });

    
    if (input.value !== '') {
        label.style.transform = 'translateY(-100%)';   
        label.style.top = '0';
        label.style.color = '#EF230C';
    }

});  