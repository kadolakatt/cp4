function validar_formulario() {
    //var nombre = documento.formRegistro.txtNombre;
    var nombre = document.getElementById("txtNombre");
    var email = document.getElementById("txtEmail");
    var password = document.getElementById("txtPassword");
    var apellidos = document.getElementById("txtApellidos");
    var errores = document.getElementById("errores");
    var hay_errores = false;

    errores.innerHTML = "";
    if (nombre.value.length == 0 || nombre.value.length < 8) {
        //alert('El nombre es un campo requerido y debe tener más de 8 caracteres.');
        errores.innerHTML += 'El nombre es un campo requerido y debe tener más de 8 caracteres. <br/>';
        nombre.className = "error";
        hay_errores = true;
        //return false;
    }

    var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.value.match(formato_email)) {
        //alert('Debe especificar un correo electrónico válido.');
        errores.innerHTML += 'Debe especificar un correo electrónico válido. <br/>';
        email.className = "error";
        hay_errores = true;
        //return false;
    }

    if (password.value.length == 0 || password.value.length < 8) {
        //alert('La contraseña es un campo requerido y debe tener más de 8 caracteres.');
        errores.innerHTML += 'La contraseña es un campo requerido y debe tener más de 8 caracteres.<br/>'
        password.className = "error";
        hay_errores = true;
        //return false;
    }

    if (apellidos.value.length == 0 || apellidos.value.length < 8) {
        //alert('El nombre es un campo requerido y debe tener más de 8 caracteres.');
        errores.innerHTML += 'El nombre es un campo requerido y debe tener más de 8 caracteres.<br/>'
        apellidos.className = "error";
        hay_errores = true;
        //return false;
    }

    return !hay_errores;

}