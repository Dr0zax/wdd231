const baseUrl = "https://developer.nps.gov/api/v1";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function getJSON(url) {
  const options = {
    method: "GET",
    headers: {
      'X-Api-Key': apiKey
    }
  };
  let data = {};
  const response = await fetch(url, options);
  if (response.ok) {
    data = await response.json();
  } else {
    console.log("Error: " + response.status);
  }
  return data;
}

export async function getParkData() {
  const data = await getJSON(`${baseUrl}/parks?parkCode=yell`);
  return data.data[0];
}

export function getInfoLinks(data) {
  const withUpatedImages = parkInfoLinks.map((item, index) => {
    item.image = data[index + 3].url;
    return item;
  })

  return withUpatedImages
}

export async function getVisitorCenterData() {
  const data = await getJSON(`${baseUrl}/visitorcenters?parkCode=yell`);
  return data.data[0];
}

export async function getAlerts() {
  const data = await getJSON(`${baseUrl}/alerts?parkCode=yell`);
  return data.data[0];
}

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    description: "Learn about the visitor centers in the park."
  }
];
