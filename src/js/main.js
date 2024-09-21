import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const parkTitle = document.querySelector(".title");
parkTitle.innerHTML = parkData.fullName;

const disclaimer = document.querySelector(".disclaimer-link");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-title">${info.name}</a>
    <div class="hero-info">
    <p>${info.designation}</p>
    <p>${info.states}</p>
    </div>`;

}
const heroContentContainer = document.querySelector(".hero-content")
heroContentContainer.insertAdjacentHTML("afterbegin", parkInfoTemplate(parkData))

const heroImage = document.querySelector(".hero-img")
heroImage.src = parkData.images[0].url