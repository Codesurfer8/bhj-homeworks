const panelsButtons = document.querySelector(".book__control");
const itemsButtons = Array.from(panelsButtons.children);
const bookSize = document.getElementById("book");

function closeSelection() {
    itemsButtons.forEach(
        (item) => {
            item.classList.remove("font-size_active");
        }
    );
};

for (let i = 0; i < itemsButtons.length; i++) {
    itemsButtons[i].addEventListener(
        "click",
        (e) => {
            e.preventDefault();
            closeSelection();

            itemsButtons[i].classList.add("font-size_active");

            if (itemsButtons[i].classList.contains("font-size_small")) {
                bookSize.classList.add("book_fs-small")
                bookSize.classList.remove("book_fs-big")
            } else if (itemsButtons[i].classList.contains("font-size_big")) {
                bookSize.classList.add("book_fs-big")
                bookSize.classList.remove("book_fs-small")
            } else {
                bookSize.classList.remove("book_fs-small")
                bookSize.classList.remove("book_fs-big")
            }
        }
    )
};


