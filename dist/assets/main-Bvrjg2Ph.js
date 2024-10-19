(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const a="https://developer.nps.gov/api/v1",c="CbvfHto0855tcxsyyjHyXshlDmCaMvL3SS8FL8H4";async function l(e){const t={method:"GET",headers:{"X-Api-Key":c}};let n={};const i=await fetch(e,t);return i.ok?n=await i.json():console.log("Error: "+i.status),n}async function u(){return(await l(`${a}/parks?parkCode=yell`)).data[0]}function d(e){return p.map((n,i)=>(n.image=e[i+3].url,n))}const p=[{name:"Current Conditions &#x203A;",link:"conditions.html",description:"See what conditions to expect in the park before leaving on your trip!"},{name:"Fees and Passes &#x203A;",link:"fees.html",description:"Learn about the fees and passes that are available."},{name:"Visitor Centers &#x203A;",link:"visitor_centers.html",description:"Learn about the visitor centers in the park."}];function f(e){const t=document.querySelector(".disclaimer-link");t.href=e.url,t.innerHTML=e.fullName;const n=document.querySelector(".title");n.innerHTML=e.fullName,document.querySelector(".hero-content").insertAdjacentHTML("afterbegin",h(e));const o=document.querySelector(".hero-img");o.src=e.images[0].url}function m(e){document.querySelector("#park-footer").insertAdjacentHTML("afterbegin",g(e))}function h(e){return`<a href="/" class="hero-title">${e.name}</a>
        <div class="hero-info">
        <p>${e.designation}</p>
        <p>${e.states}</p>
        </div>`}function g(e){const t=y(e.addresses),n=v(e.contacts.phoneNumbers);return`<section class="contact">
      <h3>CONTACT INFO</h3>
      <h4>Mailing Adresss:</h4>
      <div><p>${t.line1}</p>
      <p>${t.city}, ${t.stateCode}, ${t.postalCode}</p>
      </div>
      <h4>Phone:</h4>
      <p>${n.phoneNumber}</p>
      </section>`}function y(e){return e.find(n=>n.type==="Mailing")}function v(e){return e.find(n=>n.type==="Voice")}function k(e){f(e),m(e)}function C(e){return`<div class="info-card">
      <img src="${e.image}" alt="img">
      <a href="${e.link}">${e.name}</a>
      <p>${e.description}</p>
      </div>`}async function L(){const e=await u(),t=d(e.images);k(e),b(e),$(t)}function b(e){document.querySelector(".intro").insertAdjacentHTML("afterbegin",`<h2>${e.fullName}</h2>
      <p>${e.description}</p>`)}function $(e){const t=document.querySelector(".info"),n=e.map(C);t.insertAdjacentHTML("afterbegin",n.join(""))}L();
