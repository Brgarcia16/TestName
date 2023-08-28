function registroUsuario() {
    document.getElementById('idFormRegistro')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        var nombre = document.getElementById('user').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm_password').value;
        var email = document.getElementById('email').value;

        // Crear un objeto para guardar los datos

        if (nombre === '') {
            return mensajeAdvertenciaLogin('emptyUser')
        }
        if (password === '') {
            return mensajeAdvertenciaLogin('emptyPass')
        }
        if (confirmPassword === '') {
            return  mensajeAdvertenciaLogin('emptyPass')
        }else{
            if (password != confirmPassword){
                return mensajeAdvertenciaLogin('passwordNotMatch')
            }
        }
        if (email === '') {
            return mensajeAdvertenciaLogin('emptyEmail')
        }

        var datos = {
            nombre: nombre,
            password: password,
            confirmPassword: confirmPassword,
            email: email
        };
        if (nombre != '' && password != '' && confirmPassword != '' && email != '') guardarDatosUsuario(datos); else console.log(mensajeAdvertenciaLogin("errorData"))

    });
}

function guardarDatosUsuario(datos){
    localStorage.setItem('registroForm', JSON.stringify(datos));

    console.log(mostrarNotificacionLogin('registroData'));

    window.location.href = "login.html";
}


var currentURL = window.location.href;

if (currentURL.includes("registro.html")) {
    alert('¡Bienvendio al Registro!');
    alert('Ingresa tu nombre de usuario!!');
    alert('Ingresa una contraseña segura');
    alert('Luego ingresa la misma contraseña. Asegurate que sean iguales!!');
    alert('Por ultimo ingresa un mail valido!!');
    alert('Antes de confirmar, puedes comprobar las validaciones de los campos. Adelante!!');
}