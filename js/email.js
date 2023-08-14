const btn = document.getElementById('button');

document.getElementById('formEmail')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_mr5nasq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Volver a intentar';
      alert('Email enviado correctamente!');
    }, (err) => {
      btn.value = 'Voler a intentar';
      alert(JSON.stringify(err));
    });
});



function mostrarNotificacion() {
    var notificacion = document.querySelector('.notificacion.success');
    notificacion.classList.add('mostrar');
  
    setTimeout(function () {
      cerrarNotificacion();
    }, 2000); // Cerrar la notificación automáticamente después de 5 segundos
  }
  
  function cerrarNotificacion() {
    var notificacion = document.querySelector('.notificacion.success');
    notificacion.classList.remove('mostrar');
  }


  let subMenu = document.getElementById("subMenu");
  function toggleMenu(){
    subMenu.classList.toggle("open-menu")
  }