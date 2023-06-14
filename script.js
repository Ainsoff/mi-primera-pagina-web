//-------------------------Button---------------------

function showAlert() { alert("¡Hola, esta es una alerta desde JavaScript!");}

//------------------------Button audio------------------

// Obtener referencias a los elementos del botón y el audio
function Audio() {
    const boton = document.getElementById("button_audio");
    const audio = document.getElementById("audio");
    const volumenControl = document.getElementById("volumen");

// Función para manejar la reproducción y pausa del audio
    function reproducirPausar() {
        if (audio.paused) {
            audio.play();
            volumenControl.style.display = "block"; // Mostrar el control de volumen al reproducir
        } else {
            audio.pause();
            volumenControl.style.display = "none"; // Ocultar el control de volumen al pausar
        }
    }
  
    function ajustarVolumen() {
        audio.volume = volumenControl.value;
    }
  
    boton.addEventListener("click", reproducirPausar);
    volumenControl.addEventListener("input", ajustarVolumen);
}


//---------------------------Nav----------------------

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

//---------------------------forms-----------------------

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email)
}
function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}
