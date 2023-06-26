
//Formulario
function enviarMensaje() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
  
    window.alert("Se ha enviado tu mensaje.");
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Correo: " + correo);
    console.log("Asunto: " + asunto);
    console.log("Mensaje: " + mensaje);
  }

 
 