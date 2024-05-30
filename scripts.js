document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. ¡Gracias por contactarme!');
});

function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const scrollAmount = carousel.clientWidth;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}


function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. ¡Gracias por contactarme!');
});