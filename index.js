let formulario = document.getElementById('form-register');

const usuariosBloqueados = ["yoly", "21002974", "test"];



formulario.addEventListener('submit', function(evento){
    
    evento.preventDefault();

    let bloqueado = false;
    let usuario = document.getElementById("user");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let fechaNac = document.getElementById("fechanacimiento");
    let lblError = document.getElementById("error");
    let expCorreo = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(usuario.value == ""){
        lblError.innerText = 'El campo usuario no puede estar vacio';
        usuario.focus;
        return;
    }
    if(email.value == ""){
        lblError.innerText = 'Debe ingresar un email';
        email.focus;
        return;
    }
    if (expCorreo.test(email)){
        lblError.innerText = 'El formato del email es incorrecto';
        email.focus;
        return;
    }
    if(password.value == ""){
        lblError.innerText = 'Debe ingresar un password';
        password.focus;
        return;
    }
    if(fechaNac.value == ""){
        lblError.innerText = 'Debe ingresar fecha de nacimiento';
        fechaNac.focus;
        return;
    }

    usuariosBloqueados.forEach( function(valor, indice, array) {
        console.log("En el índice " + indice + " hay este valor: " + valor);
        if(valor == usuario.value){
            bloqueado = true;
        }
    });

    if(bloqueado){
        alert('Usuario ' + usuario.value + ' ya ingresado, intente con otro');
        usuario.focus;
    }else{
        alert('Bienvenido ' + usuario.value);
    }
    
});