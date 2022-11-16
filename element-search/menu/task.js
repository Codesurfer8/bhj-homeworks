
const menus = document.querySelectorAll('.menu_main');

menus.forEach(
    (menuMainItem) => {
        const links = menuMainItem.querySelectorAll(".menu__link");
        const menu = menuMainItem.querySelectorAll(".menu");
        const allSub = Array.from(menuMainItem.querySelectorAll(".menu_sub"));

        function closingSubMenus(subMenu) {
            allSub.forEach(
                (item) => {
                    if (item === subMenu) {
                        return;
                    }

                    item.classList.remove("menu_active")
                }
            )
        }

        for (let index = 0; index < links.length; index++) {
            const link = links[index];
            link.onclick = () => {

                const linkParent = link.parentElement;
                const menuSub = linkParent.querySelector(".menu_sub");
                closingSubMenus(menuSub);

                if (menuSub) {
                    menuSub.classList.toggle("menu_active");
                    return false;
                }
            }
        };
    })


// другой подход к решению*
            // const menuSub = link.nextElementSibling;
            // if(menuSub.classList.contains("menu_sub")) {
            //     menuSub.classList.toggle("menu_active")
            // }
            // return false
