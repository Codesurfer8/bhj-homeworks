//base level

const countValue = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const averageClick = document.getElementById("average")


let i = 0;

let timeStart = new Date().getTime();


let doClick = function () {
    const timeEnd = new Date().getTime();
    let diff = (timeEnd - timeStart) / 1000;
    if(diff < 1) {
        averageClick.textContent = ((1 / diff).toFixed(0));
    }

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
     
    timeStart = new Date().getTime();
};

cookie.onclick = doClick;

// high level






