
var letras = ["a","e","i","o","u"];

var reemplazos =["ai","enter","imes","ober","ufat"];

var caracteres=['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0',' ']

navigator.permissions.query({name: "clipboard-write"}).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
    }
  });

function encriptador (cadena){
    for (var i=0; i<=cadena.length; i++){
        for (var c=0; c<5;c++){
            if (cadena [i]==letras[c]){
                cadena [i]= reemplazos [c];

            }
        }
    }
    return cadena;
}

function display() {
    var textoIngresado = document.querySelector(".cuadro_desencriptador");
    var imagen = document.getElementById('pergamino');
    if (textoIngresado.textContent == ""){
        imagen.style.display = 'block';
    }
    else {
        imagen.style.display = 'none';
    }
}

function quitarAcentos(text){

}

function mostrar(listo){
    
    var listotd = document.querySelector(".cuadro_desencriptador")
    listotd.textContent = listo
}

function desencriptador (text){
    var aux = text;
    for (var c=0; c<5 ; c++){
        busqueda = text.includes(reemplazos[c]);
        if (busqueda == true){
            var aux2 = aux.replaceAll(reemplazos[c],letras[c]);
            aux = aux2;
        }
    }
    busqueda = false;
    console.log (aux);
    return aux;
}
function verificar (text){
    var aux = text.toLowerCase();
    if (aux == text){
        var valido = true
        var arrayAux = Array.from(text)
        console.log(arrayAux)
        for (c=0; c<(arrayAux.length); c++) {
            var letra = arrayAux[c]
            if (caracteres.includes(letra)==true){
                var valido3 = true
            }
            else{
                var valido3 = false
                break
            }
        }
    }
    else{
        var valido = false;
    }
    
    return valido3;
}    

function copiar() {
    
  }
  
 

