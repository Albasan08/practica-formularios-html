document.addEventListener("DOMContentLoaded", () => {
// FORMULARIO 1
// ACCEDIENDO A LOS ELEMENTOS
const formulario1 = document.getElementById("formulario1");

// EVENTOS
// Para validar que los campos del primer formulario no estén vacíos

formulario1.addEventListener("submit", function (ev) {
    const nombre1 = document.forms["formulario1"]["nombre"].value;
    const apellidos1 = document.forms["formulario1"]["apellidos"].value;
    const edad1 = document.forms["formulario1"]["edad"].value;
    const radio1 = document.getElementsByName("sexo");
    let isChecked = false;
    const checkbox1 = document.getElementsByName("me-siento-del-club");
    let contador = 0;
    const textarea1 = document.forms["formulario1"]["text-area"].value;
    const email1 = document.forms["formulario1"]["email"].value;
    const telefono1 = document.forms["formulario1"]["telefono"].value;

    if (nombre1 === "") {
        alert("El campo nombre es obligatorio.");
        ev.preventDefault();
  }
    if (apellidos1 === "") {
        alert("El campo apellidos es obligatorio.");
        ev.preventDefault();
  }
    if (edad1 === "") {
        alert("El campo edad es obligatorio.");
        ev.preventDefault();
  }
    for (let i = 0; i < radio1.length; i++) {
        if (radio1[i].checked) {
            isChecked = true;
            break;
        } 
    }
    if (!isChecked) {
        ev.preventDefault();
        alert('El campo sexo es obligatorio')
    }
    for (let i = 0; i < checkbox1.length; i++) {
        if (checkbox1[i].checked) {
            contador++;
        } 
        if (contador === 0) {
            alert("Debes marcar al menos un checkbox.");
            ev.preventDefault();
    }
    if (textarea1 === "") {
        alert("El campo escribe algo sobre ti es obligatorio.");
        ev.preventDefault();
    }
    if (email1 === "") {
        alert("El campo email es obligatorio.");
        ev.preventDefault();
    }
    if (telefono1 === "") {
        alert("El campo teléfono es obligatorio.");
        ev.preventDefault();
    }
};
});
});
