import spritePath from '../images/sprite.symbol.svg';

export function mediaCardTemplate(info) {
  return `<div class="info-card">
      <img src="${info.image}" alt="img">
      <a href="${info.link}">${info.name}</a>
      <p>${info.description}</p>
      </div>`;
}

export function alertTemplate(info) {
  let category;
  
  if (info.category == "Park Closure")
  {
    category = "closure";
  } else
  {
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
  <h3>${info.name}</h3>
  <p>${info.description}</p>
  <p>${info.directionsInfo}</p>
  </li>`;
}

export function activitiesTemplate(info) {
  return `<li>
  <p>${info.name}</p>
  </li>`;
}