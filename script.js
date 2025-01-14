import { source } from './source.js';

console.log(source);

// prendo il calendario dal DOM
const calendar = document.getElementById("calendar");

// creo una cella del calendario con il contenuto passato come parametro 
const createCell = (content = "") => {
    // creo un div con la classe calendar-day 
    const cell = document.createElement("div");
    cell.classList.add("calendar-day");
    // aggiungo il contenuto passato come parametro al div
    cell.append(content)
    return cell;
}

const createModal = (content = "") => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.append(content);
    return modal;
}

const createContent = (content = "") => {
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.append(content);
    return modalContent;
}

const createCloseBtn = (content = "") => {
    const span = document.createElement("button");
    span.classList.add("close", "btn");
    span.append(content);
    return span;
}

// faccio un ciclo per creare le celle del calendario e aggiungere il contenuto ad ogni cella  
for (let i = 1; i <= source.length; i++) {

    // creo le celle e le aggiungo come figlie al calendario
    const cell = createCell();
    calendar.appendChild(cell);

    // aggiungo il contenuto ad ogni singola cella facendo un ciclo sull'array source
    cell.innerHTML = `<img class="icons" src="images/icons/${source[i - 1].icon}.png" />` + `<p>${i}<p>`;

    // creo un evento, quando si clicca sulla cella si apre la modale
    cell.addEventListener('click', () => {
        // lo stile della modale diventa flex
        modal.style.display = "flex";
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
        modalContent.innerHTML = `<p>${source[i - 1].text}</p>`;
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