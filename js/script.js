// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const container = document.getElementById("cont");
let array = numberArray();
let arrayUtente = [];
let contatore = 0;
console.log(array);

//INIZIO
inizio(array);

// FUNZIONI
// creo un array vuoto dove pusho ogni volta un numero da 1 a 99
function numberArray(){
  const array = [];
  for (let i = 0; i < 5; i++){
    array[i]= randomNumber(1, 99);
  }
  return array;
};

// genero un numero random
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// funzione iniziale
function inizio(init){
  
  container.innerHTML = `
  <h1 class="">Cerca di ricordare questi numeri</h1> <br>
  <span class="box">${init[0]}, ${init[1]}, ${init[2]}, ${init[3]}, ${init[4]}</span>
  `;
 
  // 
  setTimeout(function(){

    container.innerHTML = "";

    for(let i = 0; i < 5; i++);

  }, 10000); // faccio sparire i numeri dopo 10s
}

// FACCIO PARTIRE I PROMPT QUANDO SCADE IL TEMPO PER LA VISUALIZZAZIONE DEI NUMERI
setTimeout(function(){

  for(let i = 0; i < 5; i++){
      let numeriRicordati = parseInt(prompt('Inserisci un numero'));

      if(array.includes(numeriRicordati)){ //confronto i numeri
          arrayUtente.push(numeriRicordati) // pusho se presente
          contatore++;
      } else if(arrayUtente.length > 0){
          container.innerHTML = 
          `
            <span class="box">${arrayUtente} </span>
            <h2>Bravo! Hai indovinato ${contatore} numeri!</h2>
          
          `
      } else{
          container.innerHTML = 
          `
            <h2>Allena meglio la tua mente! Non hai ricordato neanche un numero :-)</h2>
          `
      }
  };
}, 10001);




