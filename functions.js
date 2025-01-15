// creo una cella del calendario con il contenuto passato come parametro 
function createCell() {
    // creo un div con la classe calendar-day 
    const cell = document.createElement("div");
    cell.classList.add("calendar-day");
    return cell;
}

function createModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    return modal;
}

function createContent() {
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    return modalContent;
}

function createCloseBtn() {
    const span = document.createElement("button");
    span.classList.add("close", "btn");
    return span;
}

export { createCell, createModal, createContent, createCloseBtn };