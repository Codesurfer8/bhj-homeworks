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

// const timerCount = document.getElementById("timer");
// const [hh, mm, ss] = timerCount.textContent.split(':').map(Number);





// timer();
// let idInt = setInterval(timer, 1000);

// function timer() {
//     let now = new Date();
//     let targetTime = new Date(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getDate(),
//         hh,
//         mm,
//         ss,
//     );

//     let diffTimeSec = Math.ceil((targetTime.getTime() - now.getTime()) / 1000);

//     let hours = Math.floor(diffTimeSec / (60 * 60));
//     let diffAfterHours = diffTimeSec % (60 * 60);
//     let minutes = Math.floor((diffTimeSec % (60 * 60)) / 60);
//     let diffAfterMinutes = diffAfterHours % 60;
//     let seconds = diffAfterMinutes;

//     timerCount.innerHTML = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)

//     function addZero(num) {
//         if (num <= 9) {
//             num = `0` + num;
//         }

//         return num;
//     }

//     if(timerCount.textContent === `00:00:00`) {
//         clearInterval(idInt);
//         }
// }


const output = document.getElementById('timer');
const interval = 120;

const start = new Date();

function countdown(){
    function addInsignZero(number, digitCount = 2) {
        let string = `${number}`;
        if (string.length < digitCount) {
            string = '0' + addInsignZero(string, digitCount - 1);
        }
        return string;
    }

    let time = interval - Math.trunc((new Date() - start) / 1000);

    if (time < 0) {
        time = 0;
    }

    const seconds = time % 60;
    const minutes = ((time - seconds) / 60) % 60;
    const hours = Math.trunc(time / 3600);

    output.textContent = addInsignZero(hours) + ':' + addInsignZero(minutes) + ':' + addInsignZero(seconds);

    if (time > 0) {
        setTimeout(countdown, 1000);
    } else {
        setTimeout(finish, 0);
    }
}

function finish() {
    alert('Вы победили в конкурсе!');
}

countdown(interval);


