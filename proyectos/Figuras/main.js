//Patron modular --> para  hacer nuestro codigo privado
(() => {

})();


//Area y perimetro del cuadrado
//Crear funciones

const valueResult = document.getElementById('result');
const perimetroCuadrado = (lado) => lado *4; //Funcion flecha
const areaCuadrado = (lado) => lado *lado;
//Funcion flecha triangulo
const perimetroTriangulo = (side1,side2,side3) => side1+side2+side3;
const areaTriangulo = (base,altura) => (base*altura)/2;

//Funciones flecha para el circulo
//Diametro
const perimetroCirculo = (radio) => radio*2;
//Circunferencia
const circunferenciaCirculo = (radio) => (radio*2)*3.1416;
//Area
const areaCirculo = (radio) => (radio*radio) * 3.1416;

//crear funcion para calcular perimetro del cuadrado

function calculatePerimSquare(){
    //obtener el valor del input donde contienen el dato 
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value); //obtener valor del input pero se obitenen de tipo string por eso lo convertimos a numero

    const resultado = `El perímetro de Cuadrado es: ${perimetroCuadrado(value)} cm`; //Cpnstante que muestra el resultado del perimetro del cuadrado
    document.getElementById('result').innerText = resultado; //Imprimimos el resultado en el HTML

}

//Funcion para obtener area del cuadrado
function calculateAreaSquare(){

    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const resultadoArea = `El Área del cuadrado es: ${areaCuadrado(value)} cm^2`;
    document.getElementById('result').innerText = resultadoArea;

}

//Funcion para obtener el perimetro del triangulo
function calculatePerimTriangle(){
    //Seleccionar los elementos input del html
    let inputSide1 = document.getElementById('side1');
    let inputSide2 = document.getElementById('side2');
    let inputside3 = document.getElementById('side3');

    //Obtener el valor de los elementos input y convertirlos a tipo numero

    let sideValue1 = Number(inputSide1.value);
    let sideValue2 = Number(inputSide2.value);
    let sideValue3 = Number(inputside3.value);

    //Constante para mostrar el resultado del peimetro

    const resultPerimTriangle = `El Perimetro del Triangulo es: ${perimetroTriangulo(sideValue1,sideValue2,sideValue3)} cm`;
    valueResult.innerText = resultPerimTriangle;

    inputSide1.value = ''; //Limpiar el input
    inputSide2.value = ''; //Limpiar el input
    inputside3.value = ''; //Limpiar el input

    
}

//Funcion para calcualr el area del triangulo
function calculateAreaTriangle(){
    let baseTriangle = document.getElementById('base-triangulo');
    let heightTriangle = document.getElementById('altura-triangulo');

    let baseValue = Number(baseTriangle.value);
    let heightValue = Number(heightTriangle.value);

    const resultAreaTriangle = `El Área del triangulo es: ${areaTriangulo(baseValue,heightValue)} cm^2`;
    valueResult.innerText = resultAreaTriangle;

    baseTriangle.value = ''; //Limpiar el input
    heightTriangle.value = ''; //Limpiar el input
}

//Funcion para calcualr el perimetro del circulo
function calculatePerimCircle(){
    let radio = document.getElementById('radio');

    let radioValue = Number(radio.value);

    const resultPerimCircle = `El Diametro del Circulo es: ${perimetroCirculo(radioValue)} cm`;
    valueResult.innerText = resultPerimCircle;


}

//funcion para obtener la circunferencia dle circulo
function calculateCircunCircle(){
    let radio = document.getElementById('radio');
    let radioValue = Number(radio.value);

    const resultadoCircunferencia = `La circunferencia del Circulo es ${circunferenciaCirculo(radioValue)} cm^2`;
    valueResult.innerText =resultadoCircunferencia;


}

//funcion para obtener la area del circulo
function calculateAreaCircle(){
    let radio = document.getElementById('radio');
    let radioValue = Number(radio.value);

    const resultadoAreaCirculo = `El Área del Circulo es ${areaCirculo(radioValue)} cm^2`;
    valueResult.innerText =resultadoAreaCirculo;

    
}
