
//SONG DATA-- array con las canciones
const songList =[
    {
        title: "Cancion 1", 
        file: "song1.mp3",
        cover:"img1.jpg"

    },
    {
        title: "Cancion 2", 
        file: "song2.mp3",
        cover:"img2.jpg"

    },
    {
        title: "Cancion 3", 
        file: "song3.mp3",
        cover:"img3.jpg"

    }
];

//Cancion actual
let actualSong = null;

//Capturar elementos del DOM para trabajar con JS

const songs = document.getElementById("songs");//creamos la constante que nos ayduara a agarrar del HTML la etiqueta songs
const audio = document.getElementById("audio");//creamos la constante que nos ayduara a agarrar del HTML la etiqueta audio
const cover = document.getElementById("cover");//creamos la constante que nos ayduara a agarrar del HTML la etiqueta cover
const title = document.getElementById("title");
const play = document.getElementById("play"); //cambiar boton de play a pausa
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

//escuchar evento de la barra de progreso 
progressContainer.addEventListener("click",setProgress);

//Escuchar el elemento Audio
audio.addEventListener("timeupdate",updateProgress);

//Escuchar clicks en los controles
play.addEventListener("click",() => {
    if (audio.paused){
        playSong();
    } else{
        pauseSong();
    }

});

next.addEventListener("click", () => nextSong());
prev.addEventListener("click",() => prevSong());


//Cargar canciones y mostrar el listado

function loadSongs() {
    songList.forEach((song,index) => {
        //index es el indice
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidratar a
        link.textContent = song.title;
        link.href = "#"
        //Escuchar clicks
        link.addEventListener("click",() =>loadSong(index));
        // Añadir a li
        li.appendChild(link)
        // Aañadir li a ul
        songs.appendChild(li)
    })
}

//cargar cancion seleccionada
function loadSong(songIndex) {

    //Si la cancion esta en reproduccion si la vovlemos a pulsar que no pase nada
    if(songIndex !== actualSong){

        changeActiveClass(actualSong,songIndex);
        actualSong = songIndex;
        audio.src = "../songs/"+songList[songIndex].file;
        playSong();
        //cambiar imagen de cancion al seleccioanrla
        changeCover(songIndex);
        //Cambiar el titulo de la cancion
        changeSongTitle(songIndex);
        //Funcion para cambiar el boton d eplay a pausa
        //updateControls();

    }
}

//Actualizar barra de progreso  de la cancion
function updateProgress(event){
    //Total y actual
    const {duration,currentTime} = event.srcElement; //Obtenemos la duracion completa d ela cancion y el tiempo donde esta la cancion actualmente.
    const percent = (currentTime/duration) *100; //obtenemos el porcentaje
    progress.style.width = percent + '%';
}

//Hacer la barra de progreso clicable
function setProgress(event){
    //offsetWidth es el tamaño total de la barra de progreso
    const totalWidth = this.offsetWidth;
    //ofsetX nos muestra la posicion donde hacemos clic en la barra de progreso d ela cancion
    const progressWidth = event.offsetX;
    const current = (progressWidth/totalWidth)* audio.duration;
    audio.currentTime = current;
}

    //actualziar controles
    function updateControls(){
        if (audio.paused){
            play.classList.remove("fa-pause");
            play.classList.add("fa-play");
        } else{
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
        }

    }

    //Reproducir cancion
    function playSong(){
        if(actualSong !== null){
            audio.play();
            updateControls();
        }   
    }

    //Pausar cancion
    function pauseSong(){
        audio.pause();
        updateControls();

    }
    
//Cambiar la clase activa
function changeActiveClass(lastIndex,newIndex){

    const links = document.querySelectorAll("a");
    if(lastIndex !== null){
        links[lastIndex].classList.remove("active");
    }
    links[newIndex].classList.add("active");
}

    


//Funcion para cambiar el cover de la cancion (imagen)
function changeCover(songIndex){
    cover.src = "../img/"+songList[songIndex].cover;
}

//cambiar el titulo de l cancion
function changeSongTitle(songIndex){
    title.innerText = songList[songIndex].title;
}

//Anterior cancion
function prevSong(){
    if(actualSong>0){
        loadSong(actualSong-1);
    } else{
        loadSong(songList.length-1);
    }
}
//siguiente cancion
function nextSong(){
    if(actualSong < songList.length -1){
        loadSong(actualSong +1);
    } else{
        loadSong(0);
    }
}

//Lanzar sigueinte cancion cuando se acabe
audio.addEventListener("ended",()=> nextSong());

//GO!
loadSongs();
