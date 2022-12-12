
const inputText = document.getElementById("task__input");
const btnAdd = document.getElementById("tasks__add");
const listTasks = document.getElementById("tasks__list");

btnAdd.addEventListener(
    "click",
    () => {
        if (inputText.value !== "") {
            listTasks.insertAdjacentHTML("beforeend", `<div class="task">
            <div class="task__title">
              ${inputText.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`);
            inputText.value = "";
        }
    }
);

listTasks.addEventListener(
    "click",
    (ev) => {
        console.log(ev.target)
        if (ev.target.classList.contains("task__remove")) {
            ev.preventDefault();
            ev.target.closest(".task").remove();
        }
    }
);






