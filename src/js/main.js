import { park, parkInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = park;

const parkTitle = document.querySelector(".title");
parkTitle.innerHTML = parkData.fullName;

function setParkIntro(data) {
  const intro = document.querySelector(".intro");
  intro.insertAdjacentHTML(
    "afterbegin",
    `<h2>${data.fullName}</h2>
      <p>${data.description}</p>`
  );
}

function setParkInfoLinks(data) {
  const cardContainer = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  cardContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);