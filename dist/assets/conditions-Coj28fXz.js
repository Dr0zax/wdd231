import{g as i,b as n,c as s,s as o,d as r,v as c,e as l}from"./templates-Ls22-qzE.js";async function d(){const t=await i(),e=await n(t.parkCode),a=await s(t.parkCode);console.log(t),o(t),m(e),u(a),p(t.activities)}function m(t){const e=document.querySelector(".alerts-container"),a=t.map(r);e.insertAdjacentHTML("beforeend",a.join(""))}function u(t){const e=document.querySelector(".services details ul"),a=t.map(c);e.insertAdjacentHTML("beforeend",a.join(""))}function p(t){const e=document.querySelector(".activities details ul"),a=t.map(l);e.insertAdjacentHTML("beforeend",a.join(""))}d();
