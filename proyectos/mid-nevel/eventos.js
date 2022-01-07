boton = document.querySelector(".btn"); /*Obtenemos el elemento boton de nuestro html*/
contenedor = document.querySelector(".contenedor");/*Obtenemos el elemento div que tiene la clase contenedor de nuestro html*/
hexadecimal = document.querySelector(".hex");


colores = ["gray","blue","green","red","orange","pink","yellow","purple","brown","gold","aqua","silver","white"]; /*creamos la matriz de colores  */

vector_hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function valorHex(){
    let number = "#";
    for(let i = 0; i<6;i++){
        let random1 = Math.floor(Math.random()*vector_hex.length);
        number += vector_hex[random1];
    }

    contenedor.style.backgroundColor = number;
    hexadecimal.innerHTML= number;
}


function cambiarColor(){
    let color_random = Math.floor(Math.random()*colores.length);
    contenedor.style.backgroundColor = colores[color_random];
}

boton.addEventListener("click",valorHex); /*Cuando demos click al boton se ejecutara la clase "cambiarColor" */

/*
Como obtene run valor Random d eun vector:
rand = Math.floor(Math.random()*vector.length);
Vector[rand]

Math.floor lleva el valor a entero
*/ 