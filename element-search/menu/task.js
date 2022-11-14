const link = document.querySelectorAll(".menu__link")
const menu = document.querySelectorAll(".menu")
const item = document.querySelectorAll(".menu__item")



for (let index = 0; index < link.length - 1; index++) {
    link[index].onclick = () => {
       if(item[index].parentElement.classList.contains("menu")) {
        menu[index].classList.add("menu_active");
        return false;
       }
    }




};

// const link = document.getElementsByClassName("menu__link");
// const menu = document.getElementsByClassName("menu");
// const item = document.getElementsByClassName("menu__item");

// for (let index = 0; index <= link.length - 1; index++) {
//     link[index].onclick = () => {
//         if (item[index].querySelector(".menu")) {
//             menu[index].classList.add("menu_active");
//             return false;
//         }
//     }
// }