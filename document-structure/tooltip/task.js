const links = Array.from(document.querySelectorAll(".has-tooltip"));
const tip = document.createElement("div");
tip.classList.add("tooltip");




for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(
        "click",
        (ev) => {
            ev.preventDefault();
            tip.textContent = links[i].title;
            tip.classList.toggle("tooltip_active");
            links[i].prepend(tip);
        }
    )
};

