/**
 * INTEC S.A.S. - Archivo de Animaciones (animations.js)
 * Controla el loader, las apariciones al hacer scroll y el botón flotante.
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Ocultar el loader corporativo una vez cargue la página
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // Coincide con la transición de 0.5s en el CSS
  }

  // 2. Animación de aparición (Fade-in) al hacer scroll usando Intersection Observer
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1 // Se activa cuando al menos el 10% del elemento es visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Dejar de observar una vez animado
      }
    });
  }, observerOptions);

  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // 3. Botón "Volver Arriba" (#btn-back-to-top)
  const backToTopButton = document.getElementById("btn-back-to-top");

  if (backToTopButton) {
    // Mostrar u ocultar el botón según el scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    // Acción de desplazamiento suave al hacer clic
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});