import { getParkData, getAlerts, getVisitorCenterData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { alertTemplate, visitorCenterTemplate, activitiesTemplate } from "./templates.mjs";

async function init() {
    const parkData = await getParkData();
    const alerts = await getAlerts(parkData.parkCode);
    const vistorData = await getVisitorCenterData(parkData.parkCode)
    
    console.log(parkData);
    

    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(vistorData)
    setActivities(parkData.activities)
}
  
function setAlerts(data) {
    const alertsContainer = document.querySelector(".alerts-container");
    const html = data.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(data) {
    const visitorCentersContainer = document.querySelector(".services details ul");
    const html = data.map(visitorCenterTemplate);
    visitorCentersContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setActivities(data) {
    const ativitiesContainer = document.querySelector(".activities details ul")
    const html = data.map(activitiesTemplate)
    ativitiesContainer.insertAdjacentHTML("beforeend", html.join(""));
}

init();