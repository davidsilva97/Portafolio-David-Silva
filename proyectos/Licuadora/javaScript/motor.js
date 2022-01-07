var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");

/*Traer sonidos del html */
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

/*Funcion para saber si la clicuadora esta prendida o apagada */
function controlarLicuadora(){
    if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        sonidosLicuadora();
        licuadora.classList.add("active"); /*Cambiar la clase a active apra que se ponga el gif en lugar d ela imagen */
        // console.log("Me prendiste");
    } else{
        estadoLicuadora = "apagada";
        sonidosLicuadora();
        licuadora.classList.remove("active"); /*Quitar la clase a active apra que se ponga el gif en lugar dela imagen*/
        // console.log("Me apagaste");
    }
}

/*Sonidos licuadora */
function sonidosLicuadora(){
    if(sonidoLicuadora.paused){
        sonidoLicuadora.play();
        botonLicuadora.play();
    } else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime =0; /*Resetear el tiempo de reproduccion d ela licuadora */
    }
}