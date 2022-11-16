const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
const arrSliderItems = Array.from(document.querySelectorAll(".slider__item"));

let activeSlide = 0;

arrowNext.addEventListener(
    "click",
    () => {
        if (activeSlide < arrSliderItems.length - 1) {
            arrSliderItems[activeSlide].classList.remove("slider__item_active");
            activeSlide++
            arrSliderItems[activeSlide].classList.add("slider__item_active");
        } else {
            arrSliderItems[activeSlide].classList.remove("slider__item_active")
            activeSlide = 0;
            arrSliderItems[activeSlide].classList.add("slider__item_active")
        }

        for (let i = 0; i < arrSliderItems.length; i++) {
            if (arrSliderItems[i].classList.contains("slider__item_active")) {
                closeDots();
                itemDots[i].classList.add("slider__dot_active")
            }
        }
    }
);

arrowPrev.addEventListener(
    "click",
    () => {
        if (activeSlide <= arrSliderItems.length - 1 && activeSlide >= 1) {
            arrSliderItems[activeSlide].classList.remove("slider__item_active");
            activeSlide--
            arrSliderItems[activeSlide].classList.add("slider__item_active");
        } else {
            arrSliderItems[activeSlide].classList.remove("slider__item_active")
            activeSlide = arrSliderItems.length - 1;
            arrSliderItems[activeSlide].classList.add("slider__item_active")
        }

        for (let i = 0; i < arrSliderItems.length; i++) {
            if (arrSliderItems[i].classList.contains("slider__item_active")) {
                closeDots();
                itemDots[i].classList.add("slider__dot_active")
            }
        }
    });


// high level 

function closeDots() {
    itemDots.forEach(
        (item) => {
            item.classList.remove("slider__dot_active")
        }
    )
}

const itemDots = Array.from(document.querySelectorAll(".slider__dot"))

function closeItems() {
    arrSliderItems.forEach(
        (item) => {
            item.classList.remove("slider__item_active")
        }
    )
}

for (let i = 0; i < itemDots.length; i++) {
    itemDots[i].onclick = () => {
        closeDots();
        itemDots[i].classList.add("slider__dot_active")

        if (itemDots[i].classList.contains("slider__dot_active")) {
            closeItems();
            arrSliderItems[i].classList.add("slider__item_active")
        }
    }
}





















