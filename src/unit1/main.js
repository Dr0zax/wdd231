import { cookieRecipes } from "./recipes.mjs";

const cookieData = cookieRecipes;

function setCookieInfo(data) {
    console.log(data);
    const container = document.querySelector(".recipes");
    const html = data.map(recipeTemplate);
    container.insertAdjacentHTML("afterbegin", html.join(''));
}

function recipeTemplate(info) {
    return `<div class="recipe">
        <h2>${info.recipe_name}</h2>
        <img src="${info.image}">
    </div>`;
};

function getType(data) {
    const tradContainer = document.querySelector(".traditional");
    const trad = data.find((data) => data.type === "traditional");
    tradContainer.insertAdjacentHTML("afterbegin", `${trad.recipe_name}`);
}

setCookieInfo(cookieData);
getType(cookieData);