
alert("Bienvendio a mi pagina web");
alert("Para esta primera entrega realice mi foco en el login, asi que para acceder. Sigue los pasos...")
alert("Click en foto de perfil --> Click en login/register")

const mensajeAdevertencia = document.getElementById('mensajeUser');
const mensajeSuccess = document.getElementById('mensajeSuccess');


// const usuario = 'brayan';
// const password = 'pass';

function login() {
    document.getElementById('idFormLogin')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            var uservalue = document.getElementById('user').value;
            var passvalue = document.getElementById('password').value;

            var login = validarDatosUsuario(uservalue, passvalue);

            if (login) {
                mostrarNotificacionLogin("mensajeSuccess");
                window.location.href = "../index.html";
            }
        });

}




function validarDatosUsuario(uservalue, passvalue) {
    var datosGuardados = localStorage.getItem('registroForm');
    var datos = JSON.parse(datosGuardados);

    if (datos != null) {
        if (uservalue != "") {
            if (uservalue != datos.nombre) {
                return mensajeAdvertenciaLogin("userWrong");
            } else {
                var count = 1;
            }
        } else {
            return mensajeAdvertenciaLogin("emptyUser");
        }
        if (passvalue != "") {
            if (passvalue != datos.password) {
                return mensajeAdvertenciaLogin("passWrong");
            } else {
                var count2 = 1;
                var loginCorrecto = true;
            }
        } else {
            return mensajeAdvertenciaLogin("emptyPass");
        }
        return loginCorrecto;
    } else {
        return  mensajeAdvertenciaLogin("needRegister");
    }



   
}


function mensajesPantalla(mensaje) {
    if (mensaje === "exito") {
        return mensajeSuccess.textContent = 'Logueado correctamente';
    } else {
        return mensajeAdevertencia.textContent = mensaje;
    }

}


// Esto es extra, no evaluar
function mostrarNotificacionLogin(event) {
    var notificacion = document.querySelector('.notificacion.success');
    retornoMensajes(event);
    notificacion.classList.add('mostrar');
    timeOutMessageUser();
}


function mensajeAdvertenciaLogin(event) {
    var notificacion = document.querySelector('.notificacionAdvertencia.warning')
    retornoMensajes(event);
    notificacion.classList.add('mostrar');
    timeOutMessageUser();
}

function cerrarNotificacion() {
    var notificacion = document.querySelector('.notificacion.success');
    var notificacion = document.querySelector('.notificacionAdvertencia.warning');
    notificacion.classList.remove('mostrar');
}


function timeOutMessageUser() {
    setTimeout(function () {
        cerrarNotificacion();
    }, 2000);
}

//NoValidar
function mostrarPass(){
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const toggleButton = document.getElementById('icon_pass_slash');
    
    toggleButton.addEventListener('click', function() {
        if (passwordInput.type === 'password' || confirmPasswordInput.type === 'password') {
            passwordInput.type = 'text';
            confirmPasswordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
            confirmPasswordInput.type = 'password';
        }
    });
}




function retornoMensajes(event) {
    switch (event) {
        case "emptyUser":
            mensajesPantalla("El usuario no puede estar vacio");
            break;
        case "emptyPass":
            mensajesPantalla("La password no puede ser vacio");
            break;
        case "userWrong":
            mensajesPantalla("El usuario es incorrecto");
            break;
        case "passWrong":
            mensajesPantalla("La password es incorrecta");
            break;
        case "mensajeSuccess":
            mensajesPantalla("exito");
            break;
        case "emptyEmail":
            mensajesPantalla("El email no puede ser vacio");
            break;
        case "registroData":
            mensajesPantalla("Datos guardados correctamente");
            break;
        case "passwordNotMatch":
            mensajesPantalla("No coinciden las contraseñas");
            break;
        case "errorData":
            mensajesPantalla("Error al guardar los datos, revisar log");
            break;
        case "needRegister":
            mensajesPantalla("No existen registros. Por favor Registrarse");
            break;
    }
}



