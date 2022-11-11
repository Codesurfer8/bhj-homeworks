// task

const moleCountDead = document.getElementById("dead");
const miss = document.getElementById("lost");


let getHole = index => document.getElementById(`hole${index}`);

for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
    let hole = getHole(holeIndex)

    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            moleCountDead.textContent++;
            if (moleCountDead.textContent == 10) {
                alert("The player won !")
                moleCountDead.textContent = 0
                miss.textContent = 0
            }
        } else {
            miss.textContent++;
            if (miss.textContent == 5) {
                alert("The mole won !")
                miss.textContent = 0
                moleCountDead.textContent = 0
            }
        }
    }
};


