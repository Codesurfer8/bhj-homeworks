// task

const timerCount = document.getElementById("timer");
const countDown = () => {
    if(timerCount.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(setId);
    } else {
        timerCount.textContent -= 1;
    }
};

const setId = setInterval(countDown, 1000);

// повышенный уровень


// const timerCount = document.getElementById("timer");
// const [hh, mm, ss] = timerCount.textContent.split(':').map(Number);
// let seconds = ss + 60 * mm + 60 * 60 * hh;

// timerCount.textContent = new Date(2022, 0, 0, 0, 0, seconds).toLocaleTimeString();



