const signUpLink = document.querySelector('.signUpBtn-link');
const signInLink = document.querySelector('.signInBtn-link');

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
       