// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.



const gridElement = document.getElementById("grid");
// 1. Generare numeri da 1 a 100 e stamparli all'interno della cella.
for (let i = 1; i <= 100; i++ ) {
    console.log(i);
    const cellElement = `<div class="square"> ${i} </div>`
    gridElement.innerHTML += cellElement; 
}


// 2. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const squareElement = document.getElementsByClassName ("square");

squareElement.addEventListener ("click", function (
    
))

















