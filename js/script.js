
alert("Bienvendio a mi pagina web");
alert("Para esta primera entrega realice mi foco en el login, asi que para acceder. Sigue los pasos...")
alert("Click en foto de perfil --> Click en login/register")

const mensajeAdevertencia = document.getElementById('mensajeUser');
const mensajeSuccess = document.getElementById('mensajeSuccess');


const usuario = 'brayan';
const password = 'pass';

function login() {
    document.getElementById('idFormLogin')
        .addEventListener('submit', function (event) {
            event.preventDefault();
            var elementUser = document.getElementById('user');
            var uservalue = elementUser.value;
            var elementPassword = document.getElementById('password');
            var passvalue = elementPassword.value;
            var ingresar = document.getElementById('idEntrar');
            var ingresar = ingresar.value;

            if (uservalue != "") {
                if (uservalue != usuario) {
                    return mensajeAdvertenciaLogin("userWrong");
                } else {
                    var count = 1;
                }
            } else {
                return mensajeAdvertenciaLogin("emptyUser");
            }
            if (passvalue != "") {
                if (passvalue != password) {
                    return mensajeAdvertenciaLogin("passWrong");
                }else{
                    var count2 = 1;
                }
            } else {
                return mensajeAdvertenciaLogin("emptyPass");
            }
            var suma = count + count2;
            if (suma == "2"){
                mostrarNotificacionLogin("mensajeSuccess");
                window.location.href = "../index.html";
            }
        });

}


function mensajesPantalla(mensaje) {

    if (mensaje === "exito"){
        return mensajeSuccess.textContent = 'Logueado correctamente';
    } else{
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
    }
}



