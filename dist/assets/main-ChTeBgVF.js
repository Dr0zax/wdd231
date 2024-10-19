import{g as a,a as o,s as i,m as r}from"./templates-Ls22-qzE.js";async function s(){const t=await a(),n=o(t.images);i(t),c(t),m(n)}function c(t){document.querySelector(".intro").insertAdjacentHTML("afterbegin",`<h2>${t.fullName}</h2>
      <p>${t.description}</p>`)}function m(t){const n=document.querySelector(".info"),e=t.map(r);n.insertAdjacentHTML("afterbegin",e.join(""))}s();
