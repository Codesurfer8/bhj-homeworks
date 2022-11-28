// base level

// const timerCount = document.getElementById("timer");


// const countDown = () => {
//     if(timerCount.textContent == 0) {
//         alert("Вы победили в конкурсе!");
//         clearInterval(setId);
//     } else {
//         timerCount.textContent -= 1;
//     }
// };

// const setId = setInterval(countDown, 1000);



// high level

const timerCount = document.getElementById("timer");
const [hh, mm, ss] = timerCount.textContent.split(':').map(Number);





timer();
let idInt = setInterval(timer, 1000);

function timer() {
    let now = new Date();
    let targetTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hh,
        mm,
        ss,
    );

    let diffTimeSec = Math.ceil((targetTime.getTime() - now.getTime()) / 1000);

    let hours = Math.floor(diffTimeSec / (60 * 60));
    let diffAfterHours = diffTimeSec % (60 * 60);
    let minutes = Math.floor((diffTimeSec % (60 * 60)) / 60);
    let diffAfterMinutes = diffAfterHours % 60;
    let seconds = diffAfterMinutes;

    timerCount.innerHTML = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)

    function addZero(num) {
        if (num <= 9) {
            num = `0` + num;
        }

        return num;
    }

    if(timerCount.textContent === `00:00:00`) {
        clearInterval(idInt);
        }
}
