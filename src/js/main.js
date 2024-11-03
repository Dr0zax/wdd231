import { getParkData, getInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

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


function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const globalNav = document.querySelector(".global-nav")
  let menuOpen = false

  menuButton.addEventListener("click", (e) => {
    let target = e.target;
    globalNav.classList.toggle("show");

    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }
    
    if (!menuOpen) {
      menuOpen = true;
      target.setAttribute("aria-expanded", true);
    } else {
      menuOpen = false;
      target.setAttribute("aria-expanded", false);
    }

  });
}

init();
enableNavigation();