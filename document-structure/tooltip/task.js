const links = Array.from(document.querySelectorAll(".has-tooltip"));

function addTips() {
    links.forEach((item) => {
        item.insertAdjacentHTML("afterbegin", `<div class="tooltip">${item.title}</div>`);
    });
};

addTips();
const tips = Array.from(document.querySelectorAll(".tooltip"));

function closingTips() {
    tips.forEach(
        (item) => {
            item.classList.remove(`tooltip_active`);
        }
    );
};

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(
        "click",
        (ev) => {
            ev.preventDefault();
            if (tips[i].classList.contains(`tooltip_active`)) {
                tips[i].classList.remove(`tooltip_active`)
            } else {
                closingTips();
                tips[i].classList.add("tooltip_active")
            }
        }
    );
};