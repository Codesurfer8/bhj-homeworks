

const cards = Array.from(document.querySelectorAll(".card"));

cards.forEach(
    (item) => {
        const dropValue = item.querySelector(".dropdown__value");
        const dropsList = item.querySelector(".dropdown__list")

        dropValue.addEventListener(
            "click",
            () => {
                dropsList.classList.toggle("dropdown__list_active")
            }
        );

        const dropLink = item.querySelectorAll(".dropdown__link");

        for (let i = 0; i < dropLink.length; i++) {
            dropLink[i].onclick = () => {
                dropValue.textContent = dropLink[i].textContent
                dropsList.classList.remove("dropdown__list_active")
                return false;
            }
        }
    }
);