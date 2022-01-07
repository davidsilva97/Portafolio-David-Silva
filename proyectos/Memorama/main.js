/*Clase memorama */
class Memorama{

    constructor(){
        this.canPlay = false;

        this.card1 = null;
        this.card2 = null;

        /**Poner imagenes en modo random */
        this.availableImages = [1,2,3,4,5,6];
        this.orderForThisRound = [];
        /*Convertir a arreglo mis figuras */
        this.cards = Array.from(document.querySelectorAll(".board-game figure"));

        this.maxPairNumber = this.availableImages.length;
        

        /*Iniciar el jeugo */
        this.startGame();
        
    }

    /*Clase para iniciar el jeugo*/
    startGame(){
        this.foundPairs = 0;
        this.setNewOrder(); /*Metodo para crear el roden de las cartas */
        this.setImagesInCards(); /*Metodo para poner los numeros dentro de las tarjetas */
        this.openCards(); /*Abrir las tarjetas al inicio del juego */
    }

    /*Clase para revovlver la matriz de las imagenes al comenzar el juego */
    setNewOrder(){
        this.orderForThisRound = this.availableImages.concat(this.availableImages);/*Juntar el arreglo d eimagenes dos veces apra hacer el par de imagenes del memorama */
        /*Revovler imagenes */
        this.orderForThisRound.sort(() => Math.random()-0.5); /*Ordenas d emateria aleatoria el arreglo */
    }

        /*Clase para colocar las imagenes aleatorias */
    setImagesInCards(){
        for (const key in this.cards) {

            const card = this.cards[key];
            const image = this.orderForThisRound[key]; /*Pasame el valor de la matriz a imagen */
            const imgLabel = card.children[1].children[0]; /*Seleccionamos la etiqueta imagen d enuestro html */

            card.dataset.image = image;
            imgLabel.src = `img/${image}.jpg` /*Cambiamos la fuente de la imagen por el valor d ela amtriz */
        }
    }

    /*Clase para abrir las imagenes al comenzar el juego */
    openCards(){
        this.cards.forEach(card => card.classList.add("opened"));

        setTimeout(() => {
            this.closeCards();
        },1500); /*Despues de 900 milisegundos se cierran las tarjetas */
    }

    /*Clase para cerrar las imagenes al comenzar el juego */
    closeCards(){
        this.cards.forEach(card => card.classList.remove("opened"));

        /*Añadir el evento de clic a cada tarjeta */
        this.addClickEvents();
        this.canPlay=true;
    }

    addClickEvents(){
        this.cards.forEach(card => card.addEventListener("click",this.flipCard.bind(this)));
    }

    removeClickedEvents(){
        this.cards.forEach(card => card.removeEventListener("click",this.flipCard));
    }

    flipCard(e){
        const clickedCard = e.target; /*Metodo para saber cual tarjeta fue cliqueada */

        console.log(this.canPlay);
        console.log(!clickedCard.classList.contains("opened"));

        if(this.canPlay && (!clickedCard.classList.contains("opened"))){
            clickedCard.classList.add("opened");
            this.checkPair(clickedCard.dataset.image);
        }

    }

    /*Funcion para revisar si las imagenes son pares */
    checkPair(image){
        if (!this.card1) this.card1 = image;
        else this.card2 = image;

            /*Cuando las dos tarjetas esten abiertas comprobar si son iguales */
        if(this.card1 && this.card2){
            if(this.card1 == this.card2){
                this.canPlay = false;
                setTimeout(this.checkIfWon.bind(this),300);
                this.canPlay=true;
            }
            else{
                this.canPlay = false;
                setTimeout(this.resetOpenedCards.bind(this),800);
            }
        }
    }

    checkIfWon(){
        this.foundPairs++;

        this.card1 = null;
        this.card2 = null;
        this.canPlay = true;

        if (this.maxPairNumber == this.foundPairs){
            alert("Ganaste!!!")
            this.setNewGame();
        }
    }

    setNewGame(){
        this.removeClickedEvents();
        this.cards.forEach(card => card.classList.remove("opened"));

        setTimeout(this.startGame.bind(this),1000);
    }

    resetOpenedCards(){
        console.log("No son iguales");
        const firstOpened = document.querySelector(`.board-game figure.opened[data-image = '${this.card1}']`);
        const secondOpened = document.querySelector(`.board-game figure.opened[data-image = '${this.card2}']`);

        firstOpened.classList.remove("opened");
        secondOpened.classList.remove("opened");

        this.card1 = null;
        this.card2 = null;
        this.canPlay = true;
    }

}

/*Cuando el documento HTML ya se haya cargado totalmente llamar  ala funcion Memorama*/
document.addEventListener("DOMContentLoaded",() => {

    new Memorama();

});