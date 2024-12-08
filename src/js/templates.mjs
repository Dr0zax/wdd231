import spritePath from "../images/sprite.symbol.svg";

export function mediaCardTemplate(info) {
  return `<div class="info-card">
      <img src="${info.image}" alt="img">
      <a href="${info.link}">${info.name}</a>
      <p>${info.description}</p>
      </div>`;
}

export function alertTemplate(info) {
  let category;

  if (info.category == "Park Closure") {
    category = "closure";
  } else {
    category = info.category.toLowerCase();
  }

  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
  <use href="${spritePath}#alert-${category}"></use>
  </svg>
  <div>
  <h3 class="alert-${category}">${info.title}</h3>
  <p>${info.description}</p>
  </div>
  </li>`;
}

export function visitorCenterTemplate(info) {
  return `<li>
  <h4><a href="visitor-center.html?id=${info.id}">${info.name}</a></h4>
  <p>${info.description}</p>
  <p>${info.directionsInfo}</p>
  </li>`;
}

export function activitiesTemplate(info) {
  return `<li>
  <p>${info.name}</p>
  </li>`;
}

export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

export function centerImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

export function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
  <use
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xlink:href="/images/sprite.symbol.svg#${iconId}"
  ></use>
  </svg>`;
}

export function centerInfoTemplate(data) {
  const image = data.images[0];

  return `<figure>
          <img src="${image.url}" alt="${image.altText}">
          <figcaption>${image.title}<span>${image.credit}</span></figcaption>
        </figure>
    <p>${data.description}</p>`; 
}

export function centerAddressTemplate(data) {
  return `<section>
  <h3>${data.type}</h3>
  <address>
  ${data.line1} <br />
  ${data.city}, ${data.stateCode} ${data.postalCode}
  </address>
  </section>`;
}

export function centerAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = centerAddressTemplate(physical);
  if (mailing) {
    html += centerAddressTemplate(mailing);
  }
  return html;
}

export function centerAmenityTemplate(data) {
  return `<li>${data}</li>`;
}
export function centerDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}
export function centerContactsTemplate(data) {
  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${data.contacts.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.contacts.phoneNumbers[0].phoneNumber}">${data.contacts.phoneNumbers[0].phoneNumber}</a>
          </section>`;
}

export function centerDetailsTemplate(elementId, summaryText, iconId, content) {
  return `<details name="vc-details" id="${elementId}">
  <summary>
  ${iconTemplate(iconId)}
  ${summaryText}
  </summary>
  ${content}
  </details>`;
}
