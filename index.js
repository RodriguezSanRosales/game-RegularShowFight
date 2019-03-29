//form section
const gameForm = document.querySelector('#gameForm');
const optionsCards = gameForm.options;
const cntGame =  document.getElementById('cntGame');

//result section
const sectionFinal = document.getElementById('result');
const finalCards = document.getElementsByClassName('finalCards');
const textResult = document.getElementById('textResult');
var card1 = document.getElementById('card1');//carta que escogiste
var card2 = document.getElementById('card2');//carta que escogio la computadora


//función al hacer click en los inputs y muestre el resultado
function result(){
    const userOption  = optionsCards.value;//saca el valor del input seleccionado
    var computerOption = Math.floor((Math.random()*3)+1); //hace un random la computadora con números enteros del 1 al 3
    gameCards(userOption,computerOption);//se llama a la función  gameCards para que ejecute la lógica del juego
    cntGame.style.display ="none"; //se oculta la sección del formulario"
    sectionFinal.style.display = "block"; //se muestra el resultado
}

//piedra = 1
//papel = 2
//tijera = 3

//"src/images/1.jpg"; el nombre de las imagenes se tienen que guardar con un número

//función de la logica del juego
function gameCards(userOption,computerOption){

    if(userOption == computerOption){

        card1.src = 'src/images/' + userOption + '.jpg'; //se cambia el valor 'src' según el número de carta que escogiste
        card2.src = 'src/images/' + computerOption + '.jpg'; //se cambiar el valor 'src' según el numero de carta que escogio la computadora
        card1.classList.add('perdedor');//se agrega una clase a la imagen perdedora
        card2.classList.add('perdedor');
        textResult.innerHTML = 'Empate';//se integra el texto del resultado

    }else if(userOption == 1 && computerOption == 2){

        card1.src = 'src/images/' + userOption + '.jpg';
        card2.src = 'src/images/' + computerOption + '.jpg';
        card1.classList.add('perdedor');
        textResult.innerHTML = 'Perdiste';
        textResult.classList.add('colorPerdedor');

    }else if(userOption == 1 && computerOption == 3){

        card1.src = 'src/images/' + userOption + '.jpg';
        card2.src = 'src/images/' + computerOption + '.jpg';
        card2.classList.add('perdedor');
        textResult.innerHTML = 'Ganaste';
        textResult.classList.add('colorGanador');

    }else if(userOption == 2 && computerOption == 1){

        card1.src = 'src/images/' + userOption + '.jpg';
        card2.src = 'src/images/' + computerOption + '.jpg';
        card2.classList.add('perdedor');
        textResult.innerHTML = 'Ganaste';
        textResult.classList.add('colorGanador');

    }else if(userOption == 2 && computerOption == 3){

        card1.src = 'src/images/' + userOption + '.jpg';
        card2.src = 'src/images/' + computerOption + '.jpg';
        card1.classList.add('perdedor');
        textResult.innerHTML = 'Perdiste';
        textResult.classList.add('colorPerdedor');

    }else if(userOption == 3 && computerOption == 1){

        card1.src = 'src/images/' + userOption + '.jpg';
        card2.src = 'src/images/' + computerOption + '.jpg';
        card1.classList.add('perdedor');
        textResult.innerHTML = 'Perdiste';
        textResult.classList.add('colorPerdedor');

    }else if(userOption == 3 && computerOption == 2){

        card1.src = 'src/images/' + userOption + '.jpg';
        card2.src = 'src/images/' + computerOption + '.jpg';
        card2.classList.add('perdedor');
        textResult.innerHTML = 'Ganaste';
        textResult.classList.add('colorGanador');
    }
}

//fincin para que refresque la página y vuelvas a jugar
//esta función se agregó en el input con la clase btnVolver - onclick="reFresh()"
function reFresh(){
    location.reload(true);
}