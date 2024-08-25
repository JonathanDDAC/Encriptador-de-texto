

var txt_cifrado = ""

function encriptar(){
    var texto = document.getElementById("Input_texto").value; /* creamos una variable de texto
    que nos almacene lo que se escriba en el imput y lo convertimos a minuscula con el tolowercase */
    var txt_cifrado = texto.replace(/e/igm,"enter"); 
    var txt_cifrado = txt_cifrado.replace(/o/igm,"ober");
    var txt_cifrado = txt_cifrado.replace(/i/igm,"imes");
    var txt_cifrado = txt_cifrado.replace(/a/igm,"ai");
    var txt_cifrado = txt_cifrado.replace(/u/igm,"ufat");
    /*aqui vamos a buscar todas las e y reemplazarlas por enter*/
    /* encerrar la e entre // (/e/) permitira seleccionar todas las e del texto, si lo dejamos solo entre comillas
    va a tomar solamente la primera e
    el parametro i (/e/i) permitira tomar tanto mayusculas como minusculas
    el parametro g es para que afecte a toda la linea
    el parametro m es para que tome todas las lineas*/
    document.getElementById("imagen_derecha").style.display = "none";
    document.getElementById("texto1_imagen_derecha").style.display = "none";
    document.getElementById("texto2_imagen_derecha").innerHTML = txt_cifrado;
    document.getElementById("boton_copiar").style.display = "flex";
    document.getElementById("Input_texto").placeholder="Ingrese el texto aquí"
   }

function desencriptar(){
    var texto = document.getElementById("Input_texto").value; /* creamos una variable de texto
    que nos almacene lo que se escriba en el imput y lo convertimos a minuscula con el tolowercase */
    var txt_cifrado = texto.replace(/enter/igm,"e"); 
    var txt_cifrado = txt_cifrado.replace(/ober/igm,"o");
    var txt_cifrado = txt_cifrado.replace(/imes/igm,"i");
    var txt_cifrado = txt_cifrado.replace(/ai/igm,"a");
    var txt_cifrado = txt_cifrado.replace(/ufat/igm,"u");
    /*aqui vamos a buscar todas las e y reemplazarlas por enter*/
    /* encerrar la e entre // (/e/) permitira seleccionar todas las e del texto, si lo dejamos solo entre comillas
    va a tomar solamente la primera e
    el parametro i (/e/i) permitira tomar tanto mayusculas como minusculas
    el parametro g es para que afecte a toda la linea
    el parametro m es para que tome todas las lineas*/
    document.getElementById("imagen_derecha").style.display = "none";
    document.getElementById("texto1_imagen_derecha").style.display = "none";
    document.getElementById("texto2_imagen_derecha").innerHTML = txt_cifrado;
    document.getElementById("boton_copiar").style.display = "flex";
    
}

function copiar(){
    var contenido = document.getElementById("texto2_imagen_derecha").value /* guardamos el texto encriptado en una variable contenido */
    navigator.clipboard.writeText(contenido).then(function() { /*guardamos el valor de contenido en un espacio en el portapepeles*/
        console.log('Texto copiado al portapapeles: ' + contenido);
    }).catch(function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}
