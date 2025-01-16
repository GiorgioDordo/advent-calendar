import { source } from './source.js';

import { createCell, createModal, createContent, createCloseBtn } from './functions.js';

console.log(source);

// prendo il calendario dal DOM
const calendar = document.getElementById("calendar");
const button = document.getElementById("button");

let cellClicked = JSON.parse(localStorage.getItem('cellClicked')) || [];
console.log(cellClicked, "array inzio pagina");

// faccio un ciclo per creare le celle del calendario e aggiungere il contenuto ad ogni cella  
for (let i = 1; i <= source.length; i++) {

    // verifico se ci sono i dati nel localStorage

    // creo le celle e le aggiungo come figlie al calendario
    const cell = createCell();
    calendar.appendChild(cell);

    // aggiungo il contenuto ad ogni singola cella facendo un ciclo sull'array source
    cell.innerHTML = `<img class="icons" src="images/icons/${source[i - 1].icon}.png" />` + `<p class="calendar-number"><strong>${i}</strong></p>`;

    if (cellClicked.includes(i)) {
        cell.classList.add("calendar-day-clicked");
    }

    // creo un evento, quando si clicca sulla cella si apre la modale
    cell.addEventListener('click', () => {
        // lo stile della modale diventa flex
        cellClicked.push(i);
        localStorage.setItem('cellClicked', JSON.stringify(cellClicked));
        modal.style.display = "flex";
        cell.classList.remove("calendar-day");
        cell.classList.add("calendar-day-clicked");
        console.log("open", i);
    });

    // creo la modale e la aggiungo come figlia al calendario
    const modal = createModal();
    calendar.appendChild(modal);

    // creo il contenuto della modale e lo aggiungo come figla alla maodale
    const modalContent = createContent();
    modal.appendChild(modalContent);

    // se l'elemento dell'array è un'immagine, aggiungo un tag img con la classe gif e l'url dell'immagine, se è un testo aggiungo un tag p con il testo
    if (source[i - 1].type === "image") {
        modalContent.innerHTML = `<img class="gif" src="${source[i - 1].url}" />`;
    } else {
        modalContent.innerHTML = `<p class="modal-text">${source[i - 1].text}</p>`;
    }


    // creo un bottone per chiudere la modale e lo aggiungo come figlio i modalContent
    const span = createCloseBtn();
    modalContent.appendChild(span);

    // aggiungo il testo al bottone
    span.innerHTML = "Close";

    // creo un evento, quando si clicca sul bottone la modale si chiude
    span.addEventListener('click', () => {
        modal.style.display = "none";
        console.log("close", i);
    });
}


button.addEventListener("click", () => {
    const cells = document.querySelectorAll(".calendar-day-clicked");
    console.log("reset");
    console.log(cells, "clicked");
    cellClicked = [];
    localStorage.clear();

    cells.forEach((element) => element.classList.remove('calendar-day-clicked'));
    cells.forEach((element) => element.classList.add('calendar-day'));
});





