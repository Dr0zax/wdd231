import { getParkData, getParkVisitorCenterDetails} from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { listTemplate, centerImageTemplate, iconTemplate, centerInfoTemplate, centerAmenityTemplate, centerContactsTemplate, centerAddressTemplate, centerAddressesListTemplate, centerDirectionsTemplate, centerDetailsTemplate } from "./templates.mjs";

function getParam(param) {
    const query = location.search;
    const urlParam = new URLSearchParams(query);
    return urlParam.get(param);
}

function setMainContent(data) {
    const centerName = document.querySelector(".center-name");
    const centerInfo = document.querySelector(".center-info");
    const centerGallery = document.querySelector(".center-gallery");

    const centerNameHTML = iconTemplate("ranger-station") + data.name;
    centerName.innerHTML = centerNameHTML;

    const centerInfoHTML = centerInfoTemplate(data);
    centerInfo.insertAdjacentHTML("afterbegin", centerInfoHTML);

    const galleryHTML = listTemplate(data.images, centerImageTemplate);
    centerGallery.insertAdjacentHTML("beforeend", galleryHTML);

    const centerAddressesHTML = centerAddressesListTemplate(data.addresses, centerAddressTemplate);
    const centerAddresses = centerDetailsTemplate("center-addresses", "Addresses", "heading-icon_map-pin", centerAddressesHTML);
    document.querySelector(".center-info-list").insertAdjacentHTML("beforeend", centerAddresses);

    const centerDirectionsHTML = centerDirectionsTemplate(data.directionsInfo);
    const centerDirections = centerDetailsTemplate("center-directions", "Directions", "directions", centerDirectionsHTML);
    document.querySelector(".center-info-list").insertAdjacentHTML("beforeend", centerDirections);

    const centerAmenitiesHTML = listTemplate(data.amenities, centerAmenityTemplate);
    const centerAmenities = centerDetailsTemplate("center-amenities", "Amenities", "heading-icon_info", centerAmenitiesHTML);
    document.querySelector(".center-info-list").insertAdjacentHTML("beforeend", centerAmenities);

    const centerContactsHTML = centerContactsTemplate(data, iconTemplate);
    const centerContacts = centerDetailsTemplate("center-contacts", "Contacts", "phone", centerContactsHTML);
    document.querySelector(".center-info-list").insertAdjacentHTML("beforeend", centerContacts);

}

async function init() {
    const parkData = await getParkData();
    const id = getParam("id");
    const centerData = await getParkVisitorCenterDetails(id);
    setHeaderFooter(parkData);
    setMainContent(centerData);
}

init();