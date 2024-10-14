export function mediaCardTemplate(info) {
  return `<div class="info-card">
      <img src="${info.image}" alt="img">
      <a href="${info.link}">${info.name}</a>
      <p>${info.description}</p>
      </div>`;
}
