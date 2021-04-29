class contacto{
    //Propiedades
    nombre;
    email;
    fono;
    mensaje;
    //mutadores
    setNombre(nombre){this.nombre=nombre;}
    setEmail(email){this.email=email;}
    setFono(fono){this.fono=fono;}
    setMensaje(mensaje){this.mensaje=mensaje;}
    //accesadores
    getNombre(){return this.nombre;}
    getEmail(){return this.email;}
    getFono(){return this.fono;}
    getMensaje(){return this.mensaje;}
}

function validarCampos(){
    var nombre = document.getElementById('txtNombreCompleto').value;
    var email = document.getElementById('txtEmail').value;
    var mensaje = document.getElementById('txtMensaje').value;

    if (nombre.length==0||email.length==0||mensaje.length==0) {
        alert('Campos Vacios');
        return false;
    }
    return true;
}
