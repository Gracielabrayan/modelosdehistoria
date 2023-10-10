// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón de limpiar por su id
    var limpiarBtn = document.getElementById('limpiarBtn');

    // Agrega un evento click al botón de limpiar
    limpiarBtn.addEventListener('click', function() {
        // Obtiene todos los elementos del formulario
        var formularioElements = document.getElementById('miFormulario').elements;

        // Recorre los elementos del formulario y los limpia
        for (var i = 0; i < formularioElements.length; i++) {
            var element = formularioElements[i];

            // Limpia el valor de los campos de texto, email y textarea
            if (element.type !== 'submit') {
                element.value = '';
            }
        }
    });
});
