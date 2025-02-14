// Contraseña predefinida
const CONTRASENA = "281024"; // Cambia esto por la contraseña que desees

// Variable para almacenar la contraseña ingresada
let contrasenaIngresada = "";

// Contador de insistencias
let contInsistencia;

// Función para agregar números al display
function agregarNumero(numero) {
    const textoCodigo = document.getElementById('texto-codigo');
    const display = document.querySelector('.display');

    // Si el texto actual es "Contraseña", lo limpiamos
    if (textoCodigo.textContent === 'Contraseña') {
        textoCodigo.textContent = '';
    }

    // Agregamos el número al texto (en modo contraseña)
    textoCodigo.textContent += '*'; // Usamos un punto como carácter de contraseña

    // Almacenamos el número real en la variable
    contrasenaIngresada += numero;

    // Añadimos la clase para modo de contraseña
    display.classList.add('modo-password');

    // Validar la clave cuando se ingrese la longitud correcta
    if (contrasenaIngresada.length === CONTRASENA.length) {
        if (contrasenaIngresada === CONTRASENA) {
            mostrarContador(); // Mostrar el contador si la contraseña es correcta
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo."); // Mostrar un mensaje de error
            textoCodigo.textContent = 'Contraseña'; // Restablecer el texto
            display.classList.remove('modo-password'); // Quitar el modo de contraseña
            contrasenaIngresada = ""; // Reiniciar la contraseña ingresada
        }
    }
}

// Función para mostrar el contador y ocultar la caja fuerte
function mostrarContador() {
    const container = document.querySelector('.container');
    const seccionContador = document.getElementById('seccion-contador');
    const seccionGaleria = document.getElementById('seccion-galeria');
    const seccionCarta = document.getElementById('seccion-carta');

    // Ocultar la caja fuerte
    container.style.display = 'none';
    // Ocultar otras secciones
    seccionCarta.style.display = 'none';
    // Ocultar la galería
    seccionGaleria.style.display = 'none';

    // Mostrar el contador
    seccionContador.style.display = 'block';
}

// Función para actualizar el contador
function actualizarContador() {
    const fechaInicio = new Date('2024-10-28 18:50:00'); // Cambia esta fecha por la que desees
    const ahora = new Date();

    let diferenciaMs = ahora - fechaInicio;

    let anos = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    //let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    // let segundos = ahora.getSeconds() + (60 - fechaInicio.getSeconds());
    let minutos = Math.floor((diferenciaMs % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferenciaMs % (1000 * 60)) / 1000);

    //const { intervalToDuration } = dateFns;
    //const diferencia = intervalToDuration({ start: fechaInicio, end: ahora });

    // console.log(`${diferencia.years} años, ${diferencia.months} meses, ${diferencia.days} días, ${diferencia.hours} horas, ${diferencia.minutes} minutos y ${diferencia.seconds} segundos.`);

    // Ajustar minutos si es negativo
    // if (minutos < 0) {
    //     minutos = ahora.getMinutes() + (60 - fechaInicio.getMinutes());
    // }

    // Ajustar horas si es negativo
    if (horas < 0) {
        horas = ahora.getHours() + (24 - fechaInicio.getHours());
    }

    // Ajustar días si es negativo
    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }

    // Ajustar meses si es negativo
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Asegurar que los valores no sean negativos
    if (anos < 0) anos = 0;
    if (meses < 0) meses = 0;
    if (dias < 0) dias = 0;
    if (horas < 0) horas = 0;
    if (minutos < 0) minutos = 0;
    if (segundos < 0) segundos = 0;

    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);


// Función para mostrar la galería de fotos
function mostrarGaleria() {
    const seccionContador = document.getElementById('seccion-contador');
    const seccionGaleria = document.getElementById('seccion-galeria');
    const seccionCarta = document.getElementById('seccion-carta');

    // Ocultar otras secciones
    seccionContador.style.display = 'none';
    seccionCarta.style.display = 'none';

    // Mostrar la galería
    seccionGaleria.style.display = 'block';
}

// Función para mostrar la carta
function mostrarCarta() {
    contInsistencia = 0;
    const seccionGaleria = document.getElementById('seccion-galeria');
    const seccionCarta = document.getElementById('seccion-carta');

    // Ocultar la galería
    seccionGaleria.style.display = 'none';

    // Mostrar la carta
    seccionCarta.style.display = 'block';
}

function insistir() {
    contInsistencia++;
    if (contInsistencia == 1)
        alert("Esa no es la respuesta, vuelve a intentarlo :)");
    else if (contInsistencia == 2)
        alert("Qué? de nuevo te equivocaste? te daré una oportunidad más");
    else if (contInsistencia == 3)
        alert("China, marca bonito, no me hagas renegar");
    else
        alert("ya me cansé de los msjes, acepta crjo, jaja no mentira, te amo ♥");
}