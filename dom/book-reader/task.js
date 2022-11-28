const panelsButtons = document.querySelector(".book__control");
const itemsButtons = Array.from(panelsButtons.children);

function closeSelection() {
    itemsButtons.forEach(
        (item) => {
            item.classList.remove("font-size_active");
        }
    );
};


for(let i = 0; i < itemsButtons.length; i++) {
    itemsButtons[i].onclick = () => {
        closeSelection();
        itemsButtons[i].classList.add("font-size_active");
        return;
    };
};

