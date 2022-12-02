
const list = document.getElementsByName("main_point");
const listActive = document.querySelectorAll(".interests_active")

for (let i = 0; i < list.length; i++) {
    let checkList = Array.from(listActive[i].querySelectorAll(".interest__check"));
    list[i].addEventListener(
        "click",
        () => {
            if (list[i].checked) {
                checkList.forEach(
                    (item) => {
                        item.checked = true;
                    }
                )
            } else if (!list[i].checked) {
                checkList.forEach(
                    (item) => {
                        item.checked = false;
                    }
                )
            }
        } 
    )
};






