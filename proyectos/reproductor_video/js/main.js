//URL del video
//https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4

//Obtener elementos de DOM (documento)

const video = document.querySelector(".video"); //Obtener el video del documento
const play = document.querySelector(".play");
const playButtonIcon = play.querySelector("i");
const stopButton = document.querySelector(".stop");
const progressBar = document.querySelector(".progress");
const timeStamp = document.querySelector(".timestamp");

//Escuchar o capturar elementos
play.addEventListener("click",playPauseVideo);
video.addEventListener("click",playPauseVideo);
stopButton.addEventListener("click",stopVideo);
progressBar.addEventListener("change",setVideoProgress);
video.addEventListener("timeupdate",updateVideoProgress);

//Funciones

//Funcion para pausar y reproducir el video
function playPauseVideo(){
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
    playBottonIcon();
}

//Funcion para cambiar el icono de los botones
function playBottonIcon(){
    if(video.paused){
        playButtonIcon.classList.remove("fa-pause");
        playButtonIcon.classList.add("fa-play");
    }
    else{
        playButtonIcon.classList.remove("fa-play");
        playButtonIcon.classList.add("fa-pause");
    }
}

//Funcion para parar el video presionando el boton stop
function stopVideo(){
    video.pause();
    video.currentTime = 0;
    playBottonIcon();
    progressBar.value = 0;//cuando se hace stop la barra d eprogreso vuelve al principio.
}

//Funcion para que al dar clic en un lugar de la barra d eprogreso el video se posicione en ese lugar
function setVideoProgress(){
    video.currentTime = Number(progressBar.value*video.duration)/100;
}

//Funcion para que la barra de progreso se sincronize con el video
function updateVideoProgress(){
    progressBar.value = Number((video.currentTime/video.duration) * 100);
    
    if(progressBar.value == 100){
        video.currentTime = 0;
        stopVideo();
    }

    let minutes = Math.floor(video.currentTime /60); //Math.floor --> Devuelve el máximo entero menor o igual a un número.
    let seconds = Math.floor(video.currentTime%60); //Sacar los segundos del video

    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds <10){
        seconds = "0"+seconds;
    }

    timeStamp.textContent = `${minutes}:${seconds}`; //Poner los minutos en el contador
}