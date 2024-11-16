import { ennableNavigation } from "./navigation.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer-link");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  const parkTitle = document.querySelector(".title");
  parkTitle.innerHTML = data.fullName;

  const heroContentContainer = document.querySelector(".hero-content");
  heroContentContainer.insertAdjacentHTML("afterbegin", parkInfoTemplate(data));

  const heroImage = document.querySelector(".hero-img");
  heroImage.src = data.images[0].url;
}

function setParkFooter(data) {
  const footerContainer = document.querySelector("#park-footer");
  footerContainer.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-title">${info.name}</a>
        <div class="hero-info">
        <p>${info.designation}</p>
        <p>${info.states}</p>
        </div>`;
}

function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `<section class="contact">
      <h3>CONTACT INFO</h3>
      <h4>Mailing Adresss:</h4>
      <div><p>${mailing.line1}</p>
      <p>${mailing.city}, ${mailing.stateCode}, ${mailing.postalCode}</p>
      </div>
      <h4>Phone:</h4>
      <p>${voice.phoneNumber}</p>
      </section>`;
}

function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(phoneNumbers) {
  const voice = phoneNumbers.find(
    (phoneNumber) => phoneNumber.type === "Voice"
  );
  return voice;
}

export function setHeaderFooter(data) {
  setHeaderInfo(data);
  setParkFooter(data);
  ennableNavigation();
}
