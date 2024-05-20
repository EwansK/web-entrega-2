// Validar Rut
function validar_rut(rut) {
    // Limpiar el rut (sacar puntos y guiones)
    rut = rut.replace(/\./g, '').replace(/-/g, '');
    
    // Separar digito verificador
    const body = rut.slice(0, -1);
    let checkDigit = rut.slice(-1).toUpperCase();
    
    // Calcular la cantidad de digitos esperada
    let sum = 0;
    let multiplier = 2;
    
    for (let i = body.length - 1; i >= 0; i--) {
        sum += parseInt(body[i]) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    
    const remainder = sum % 11;
    let expectedCheckDigit = 11 - remainder;
    
    if (expectedCheckDigit === 11) {
        expectedCheckDigit = '0';
    } else if (expectedCheckDigit === 10) {
        expectedCheckDigit = 'K';
    } else {
        expectedCheckDigit = expectedCheckDigit.toString();
    }
    
    // Validar
    return checkDigit === expectedCheckDigit;
}

// Function to show the modal with the specified title and message
function showModal(title, message) {
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = title;
    modalBody.textContent = message;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('modal_submit'));
    modal.show();
}

function mostrar_validacion_rut(event) {
    event.preventDefault(); // Prevent form submission

    const rutInput = document.getElementById('rut').value;
    const result = validar_rut(rutInput);

    if (!result) {
        showModal('Error', 'Rut inválido');
    } else {
        showModal('Correcto!', 'Registro completado exitosamente');
        //document.getElementById('form').submit();
    }
}

// Verificar al enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', mostrar_validacion_rut);
});

function mostrarAlerta() {
    alert("SITIO EN CONSTRUCCIÓN!!!");
}