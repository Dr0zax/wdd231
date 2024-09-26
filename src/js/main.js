import { park, parkInfoLinks } from "./parkService.mjs";

const parkData = park;
const parkInfoLinksData = parkInfoLinks;

const parkTitle = document.querySelector(".title");
parkTitle.innerHTML = parkData.fullName;

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer-link");
  disclaimer.href = parkData.url;
  disclaimer.innerHTML = parkData.fullName;

  const heroContentContainer = document.querySelector(".hero-content");
  heroContentContainer.insertAdjacentHTML(
    "afterbegin",
    parkInfoTemplate(parkData)
  );

  const heroImage = document.querySelector(".hero-img");
  heroImage.src = parkData.images[0].url;

  const intro = document.querySelector(".intro");
  intro.insertAdjacentHTML(
    "afterbegin",
    `<h2>${data.fullName}</h2>
    <p>${data.description}</p>`
  )
}

function setCardInfo(data) {
  const cardContainer = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  cardContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function mediaCardTemplate(info) {
  return `<div class="info-card">
    <img src="${info.image}" alt="img">
    <a href="${info.link}">${info.name}</a>
    <p>${info.description}</p>
    </div>`;
}

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-title">${info.name}</a>
    <div class="hero-info">
    <p>${info.designation}</p>
    <p>${info.states}</p>
    </div>`;
}

setHeaderInfo(parkData);
setCardInfo(parkInfoLinksData);
