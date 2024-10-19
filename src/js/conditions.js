import { getParkData, getAlerts } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { alertTemplate } from "./templates.mjs";

async function init() {
    const parkData = await getParkData();
    const alerts = await getAlerts();
    
    setHeaderFooter(parkData);
}
  
function setAlerts(data) {
    const alertsContainer = document.querySelector(".alerts-container");
    const html = data.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

init();