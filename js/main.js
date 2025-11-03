document.addEventListener("DOMContentLoaded", () => {
// FORMULARIO 1
// ACCEDIENDO A LOS ELEMENTOS
/**
 * Acceder al elemento del DOM del formulario1
 */
const formulario1 = document.getElementById("formulario1");

// EVENTOS
/**
 * Evento que valida el formulario
 */
formulario1.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const nombre1 = document.forms["formulario1"]["nombre"].value;
    const apellidos1 = document.forms["formulario1"]["apellidos"].value;

    const edad1 = document.forms["formulario1"]["edad"].value;
    let edadRegex = new RegExp(/^[0-9]+$/, "g");
    
    const radio1 = document.getElementsByName("sexo");
    let isChecked = false;
    const checkbox1 = document.getElementsByName("me-siento-del-club");
    let contador = 0;
    const textarea1 = document.forms["formulario1"]["text-area"].value;
    
    const email1 = document.forms["formulario1"]["email"].value;
    let emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "gi")
    
    const telefono1 = document.forms["formulario1"]["telefono"].value;
    let telefonoRegex = new RegExp(/^[0-9]+$/, "g");

    if (nombre1 === "") {
        alert("El campo nombre es obligatorio.");
  }
    if (apellidos1 === "") {
        alert("El campo apellidos es obligatorio.");
  } // Para que no esté vacío
    if (edad1 === "") {
        alert("El campo edad es obligatorio.");
  } // Para que solo acepte números
    if (!edadRegex.test(edad1)) {
        alert("Por favor, ingresa una edad válida")
    }
    for (let i = 0; i < radio1.length; i++) {
        if (radio1[i].checked) {
            isChecked = true;
            break;
        } 
    }
    if (!isChecked) {
        alert('El campo sexo es obligatorio')
    }
    for (let i = 0; i < checkbox1.length; i++) {
        if (checkbox1[i].checked) {
            contador++;
        } 
        if (contador === 0) {
            alert("Debes marcar al menos un checkbox.");
    }
    if (textarea1 === "") {
        alert("El campo escribe algo sobre ti es obligatorio.");
    }
    // Para validar que no esté vacío
    if (email1 === "") {
        alert("El campo email es obligatorio.");
    }
    // Para validar que se ha ingresado un email válido
    if (!emailRegex.test(email1)) {
        alert("Por favor, ingresa un email válido");
    }
    // Para validar que no esté vacío
    if (telefono1 === "") {
        alert("El campo teléfono es obligatorio.");
    }
    // Para validar que se meten solo números
    if (!emailRegex.test(telefono1)) {
        alert("Los caracteres del campo de teléfono deben ser números")
    }
};
});
});
