const modalClose = document.querySelector(".modal__close");

modalClose.onclick = () => {
    document.getElementById("modal_main").remove("modal_active");
};

const button = document.querySelector(".show-success");

button.onclick = () => {
    if (button.className.includes("btn_danger")) {
        button.classList.replace("btn_danger", "btn_success")
    } else if (button.className.includes("btn_success")) {
        button.classList.replace("btn_success", "btn_danger")
    }

    button.textContent.includes("Сделать хорошо") ? button.textContent = "Хорошо сделано!" : button.textContent = "Сделать хорошо"
}




