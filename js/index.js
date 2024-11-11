window.addEventListener('scroll', function() {
    const navbarScroll = document.querySelector('.navbar-scroll');
    if (window.scrollY > 50) { // Cuando el scroll pasa 50px
      navbarScroll.style.display = 'block'; // Muestra 
    } else {
      navbarScroll.style.display = 'none'; // Oculta 
    }
  });
  let currentIndex = 0;

function moveSlide(direction) {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    const totalImages = images.length;
    const visibleImages = 5; // Número de imágenes visibles
    const imageWidth = images[0].clientWidth + 20; // 150px ancho + 20px margen

    // Actualiza el índice actual
    currentIndex += direction * visibleImages;

    // Lógica para permitir desplazamiento cíclico
    if (currentIndex < 0) {
        currentIndex = totalImages - visibleImages; 
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; 
    }

    // Desplazar la galería
    const offset = -currentIndex * imageWidth;
    gallery.style.transform = `translateX(${offset}px)`;
}

// Inicializa la galería
moveSlide(0); 

// envio de correo funcional ,no sirve para trabaja en tdt 
(function() {
  emailjs.init("m8cUYbeua1qgNHAAH"); 
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Recoge los datos del formulario
  const formData = new FormData(this);

  // Envía el correo
  emailjs.sendForm("service_tuwx7cj", "template_i87c1rh", this)
      .then(function() {
          alert('Correo enviado con éxito!');
      }, function(error) {
          alert('Error al enviar: ' + JSON.stringify(error));
      });
});

