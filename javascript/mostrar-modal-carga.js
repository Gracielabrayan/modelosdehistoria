// Mostrar el modal de carga
function mostrarModalCarga() {
    document.getElementById('modalCarga').style.display = 'flex';
}

// Ocultar el modal de carga
function ocultarModalCarga() {
    document.getElementById('modalCarga').style.display = 'none';
}

// Capturar el formulario y mostrar el modal de carga cuando se envía
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    mostrarModalCarga();
});