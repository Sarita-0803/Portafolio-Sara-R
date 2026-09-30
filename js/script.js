// Mensaje en la consola
console.log("Bienvenido al portafolio de Sara Romero 💗");

// Efecto cuando se desplaza la página
const elementos = document.querySelectorAll(".tarjeta, .gusto, .meta");

const observar = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition = "0.6s";

    observar.observe(elemento);

});