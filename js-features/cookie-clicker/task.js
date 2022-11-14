//task

const countValue = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");



let i = 0;
let doClick = function () {
    countValue.textContent++

    if (i === 0) {
        cookie.width = 150
        cookie.height = 100
        i = 1;
    } else if (i === 1) {
        cookie.width = 200
        cookie.height = 128
        i = 0;
    }

}

cookie.onclick = doClick;

// повышенный уровень ...




