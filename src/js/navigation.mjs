function mainMenu(e) {
    const globalNav = document.querySelector(".global-nav");
    globalNav.classList.toggle("show");
    let target = e.target;

    if (target.tagName != "BUTTON") {
        target = target.closest("button");
    }
      
    if (globalNav.classList.contains("show")) {
        target.setAttribute("aria-expanded", true);
    } else {
        target.setAttribute("aria-expanded", false);
    }
}

function subMenu(e) {
    e.currentTarget
        .closest("li")
        .querySelector(".global-nav__submenu")
        .classList.toggle("show");
    
    if (e.currentTarget.getAttribute("aria-expanded") === "false") {
        e.currentTarget.setAttribute("aria-expanded", true);
    } else {
        e.currentTarget.setAttribute("aria-expanded", false);
    }
}

export function ennableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    const submenuToggle = document.querySelectorAll(".global-nav__split-button__toggle");

    menuButton.addEventListener("click", mainMenu);
    submenuToggle.forEach(button => button.addEventListener("click", subMenu));
}

