const reveals = document.querySelectorAll(".reveal");

document.addEventListener(
    "scroll",
    () => {
        for (let i = 0; i < reveals.length; i++) {
            const topReveal = reveals[i].getBoundingClientRect().top;
            const bottomReveal = reveals[i].getBoundingClientRect().bottom;

            if (topReveal > 0 && bottomReveal < window.innerHeight) {
                reveals[i].classList.add("reveal_active");
            } else {
                reveals[i].classList.remove("reveal_active");
            }
        }
    }
);






