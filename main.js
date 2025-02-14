onload = () =>{
    document.body.classList.remove("container");
};

// Asegúrate de que el DOM esté cargado antes de agregar el evento
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón por su ID
    var boton = document.getElementById("continuar");
    
    // Añadir el evento de clic al botón
    boton.addEventListener("click", function() {
      // Redirigir a la página deseada
      window.location.href = 'pagina_dos/index.html';
    });
  });


  // Asegúrate de que el DOM esté cargado antes de agregar el evento
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón por su ID
  var boton = document.getElementById("ultimo_paso");
  
  // Añadir el evento de clic al botón
  boton.addEventListener("click", function() {
    // Redirigir a la página deseada
    window.location.href = '../pagina_3/index.html';
  });
});

