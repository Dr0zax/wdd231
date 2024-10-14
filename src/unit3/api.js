const baseURL = "https://developer.nps.gov/api/v1";

async function getJSON(endPoint) {
    const apiKey = import.meta.env.VITE_NPS_API_KEY;
    const url = `${baseURL}/${endPoint}`;
    
    const options = {
        method: "GET",
        headers: {
            'X-Api-Key': apiKey
        }
    }
    
    let data = {};
    const response = await fetch(url, options);

    if (response.ok) {
        data = await response.json();
    } else {
        console.log("Error: " + response.status);
    }
    return data;
}
// let idahoParks = getJSON('parks?stateCode=ID');
// let ciroCamps = getJSON('campgrounds?parkCode=ciro');
// let bearPhotos = getJSON('multimedia/galleries?q=bear');
let getClimbingActivitiesData = async() => { let data = await getJSON('activities/parks?q=Climbing'); return data.data[0]; };

async function renderClimbingList() {
    const climbingActivities = await getClimbingActivitiesData();
    const container = document.querySelector("#outputList");
    climbingActivities.parks.map(listTemplate).forEach(item => container.insertAdjacentHTML("beforeend", item));
}

function listTemplate(data) {
    return `<a href="${data.url}"><li>${data.fullName}</li></a><span>${data.states}</span>`;
}

renderClimbingList();