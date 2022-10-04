var botonEncriptar = document.querySelector ("#encriptar");
var botonDesencriptar = document.querySelector ("#desencriptar");
var botonCopiar = document.querySelector("#copiar")

botonEncriptar.addEventListener ("click", function(event){
    event.preventDefault();

    var texto = document.querySelector("#texto").value;

    var caracteres = verificar(texto)

    if (caracteres == true) {
        var array = Array.from (texto);
        var encriptado = encriptador(array);

        mostrar(encriptado.join(""));
    }
    else{
        mostrar("Verifique su texto. Recuerde que no se admiten mayusculas, acentos ni caracteres especiales")
    }
    display();

})

botonDesencriptar.addEventListener ("click", function(event){
    event.preventDefault();

    var texto = document.querySelector("#texto").value;

    desencriptado = desencriptador(texto);

    mostrar(desencriptado);

    display();
})

botonCopiar.addEventListener("click", function(event){
    let copyText = document.querySelector(".cuadro_desencriptador");
    copyText.select();
    document.execCommand("copy");
})

