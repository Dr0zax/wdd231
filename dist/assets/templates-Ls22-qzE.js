(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const a="https://developer.nps.gov/api/v1",l="CbvfHto0855tcxsyyjHyXshlDmCaMvL3SS8FL8H4";async function c(e){const t={method:"GET",headers:{"X-Api-Key":l}};let n={};const s=await fetch(e,t);return s.ok?n=await s.json():console.log("Error: "+s.status),n}async function v(){return(await c(`${a}/parks?parkCode=yell`)).data[0]}function $(e){return u.map((n,s)=>(n.image=e[s+3].url,n))}async function C(e){return(await c(`${a}/visitorcenters?parkCode=${e}`)).data}async function b(e){return(await c(`${a}/alerts?parkCode=${e}`)).data}const u=[{name:"Current Conditions &#x203A;",link:"conditions.html",description:"See what conditions to expect in the park before leaving on your trip!"},{name:"Fees and Passes &#x203A;",link:"fees.html",description:"Learn about the fees and passes that are available."},{name:"Visitor Centers &#x203A;",link:"visitor_centers.html",description:"Learn about the visitor centers in the park."}];function d(e){const t=document.querySelector(".disclaimer-link");t.href=e.url,t.innerHTML=e.fullName;const n=document.querySelector(".title");n.innerHTML=e.fullName,document.querySelector(".hero-content").insertAdjacentHTML("afterbegin",f(e));const r=document.querySelector(".hero-img");r.src=e.images[0].url}function p(e){document.querySelector("#park-footer").insertAdjacentHTML("afterbegin",m(e))}function f(e){return`<a href="/" class="hero-title">${e.name}</a>
        <div class="hero-info">
        <p>${e.designation}</p>
        <p>${e.states}</p>
        </div>`}function m(e){const t=h(e.addresses),n=g(e.contacts.phoneNumbers);return`<section class="contact">
      <h3>CONTACT INFO</h3>
      <h4>Mailing Adresss:</h4>
      <div><p>${t.line1}</p>
      <p>${t.city}, ${t.stateCode}, ${t.postalCode}</p>
      </div>
      <h4>Phone:</h4>
      <p>${n.phoneNumber}</p>
      </section>`}function h(e){return e.find(n=>n.type==="Mailing")}function g(e){return e.find(n=>n.type==="Voice")}function L(e){d(e),p(e)}const y="/assets/sprite.symbol-D15bL1S9.svg";function k(e){return`<div class="info-card">
      <img src="${e.image}" alt="img">
      <a href="${e.link}">${e.name}</a>
      <p>${e.description}</p>
      </div>`}function T(e){let t;return e.category=="Park Closure"?t="closure":t=e.category.toLowerCase(),`<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
  <use href="${y}#alert-${t}"></use>
  </svg>
  <div>
  <h3 class="alert-${t}">${e.title}</h3>
  <p>${e.description}</p>
  </div>
  </li>`}function A(e){return`<li>
  <h3>${e.name}</h3>
  <p>${e.description}</p>
  <p>${e.directionsInfo}</p>
  </li>`}function P(e){return`<li>
  <p>${e.name}</p>
  </li>`}export{$ as a,b,C as c,T as d,P as e,v as g,k as m,L as s,A as v};
