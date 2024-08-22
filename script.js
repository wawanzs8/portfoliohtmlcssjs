window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var navbarnav = document.querySelector('.navbarnav')
    if (window.scrollY > 50) { // Anda dapat menyesuaikan nilai scrollY sesuai kebutuhan
        navbar.classList.add('scrolled');
        navbarnav.classList.add('scrolledd');
    } else {
        navbar.classList.remove('scrolled');
        navbarnav.classList.remove('scrolledd');
    }
    
});

const hamburger = document.getElementById('hamburger');
const navbarnav = document.querySelector('.navbarnav');

hamburger.addEventListener('click',function(){
    navbarnav.classList.toggle('active')
})