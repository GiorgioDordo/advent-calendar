import { source } from './source.js';

console.log(source);

const calendar = document.getElementById("calendar");
const modal = document.getElementById("myModal");
const calendarDay = document.getElementsByClassName("calendar-day");

const createCell = (content = "") => {
    const cell = document.createElement("div");
    cell.classList.add("calendar-day");
    cell.append(content)
    return cell;
}

const createModal = (content = "") => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", "myModal");
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
    const span = document.createElement("div");
    span.classList.add("close");
    span.append(content);
    return span;
}

for (let i = 1; i <= source.length; i++) {

    const cell = createCell();
    calendar.appendChild(cell);

    const modal = createModal();
    body.appendChild(modal);

    const modalContent = createContent();
    modal.appendChild(modalContent);

    const span = createCloseBtn();
    modal.appendChild(span);

    cell.addEventListener('click', () => {
        modal.style.display = "block";
        console.log("open", i);
    });

    span.addEventListener('click', () => {
        modal.style.display = "none";
        console.log("close", i);
    });

    cell.innerHTML = `<img src="images/icons/${source[i - 1].icon}.png" />` + `<p>${i}<p>`;

    span.innerHTML = "&times;";

    if (source[i - 1].type === "image") {
        modalContent.innerHTML = `<img src="${source[i - 1].url}" />`;
    } else {
        modalContent.innerHTML = `<p>${source[i - 1].text}</p>`;
    }
}