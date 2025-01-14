import { source } from './source.js';

console.log(source);

const calendar = document.getElementById("calendar");
const modal = document.getElementById("myModal");
const modalContent = document.getElementsByClassName("modal-content");
const span = document.querySelector(".close");

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

for (let i = 1; i <= source.length; i++) {
    const cell = createCell();
    calendar.appendChild(cell);

    const modal = createModal();
    body.appendChild(modal);

    const modalContent = createContent();
    modal.appendChild(modalContent);

    // cell.addEventListener('click', () => {
    //     modal.style.display = "block";
    //     console.log("open modal", i);
    // })

    cell.onclick = function () {
        modal.style.display = "block";
    }


    span.onclick = function () {
        modal.style.display = "none";
        console.log("close modal");
    }

    cell.innerHTML = `<img src="images/icons/${source[i - 1].icon}.png" />` + `<p>${i}<p>`;

    if (source[i - 1].type === "image") {
        modalContent.innerHTML = `<img src="${source[i - 1].url}" />` + `<span id="close-modal" class="close">&times;</span>`;
    } else {
        modalContent.innerHTML = `<p>${source[i - 1].text}</p>`;
    }
}
