document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();    
})

function iniciarApp(){
    enviarCorreo();
}

function enviarCorreo(){
    
    const btnEnvio = document.getElementById('enviarCorreo');

    btnEnvio.addEventListener('click', function(e){
        e.preventDefault();
        const email = document.getElementById('correo').value;
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        window.location.href=`mailto:almacen.corpomin@gmail.com?subject=EnviadoDesdeLaWeb&body=Nombre%3A${nombre}%0ATelefono%3A${telefono}%0ACorreo%3A${email}%0AMensaje%3A${mensaje}`;
    });

}