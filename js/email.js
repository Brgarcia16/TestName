const btn = document.getElementById('button');


function formularioValidation() {
  document.getElementById('formEmail')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      var emailInput = document.getElementById("email");
      var emailValue = emailInput.value;

      if (emailValue == '') {
        mensajeAdvertencia();
      } else {
        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_mr5nasq';

        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            btn.value = 'Volver a intentar';
          }, (err) => {
            btn.value = 'Voler a intentar';
        });
        mostrarNotificacion();
      }
    });
    
}




function mostrarNotificacion() {
  var notificacion = document.querySelector('.notificacion.success');
  notificacion.classList.add('mostrar');
  timeOutMessage();
}


function mensajeAdvertencia() {
  var notificacion = document.querySelector('.notificacionAdvertencia.warning')
  notificacion.classList.add('mostrar');
  timeOutMessage();
  formularioValidation();
}


function cerrarNotificacion() {
  var notificacion = document.querySelector('.notificacion.success');
  var notificacion = document.querySelector('.notificacionAdvertencia.warning');
  notificacion.classList.remove('mostrar');
}

function timeOutMessage() {
  setTimeout(function () {
    cerrarNotificacion();
  }, 2000);
}



let subMenu = document.getElementById("subMenu");
function toggleMenu() {
  subMenu.classList.toggle("open-menu")
}