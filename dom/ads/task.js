const rotators = Array.from(document.querySelectorAll(".rotator"));

rotators.forEach(
    (itemRotators) => {

        const allCase = Array.from(itemRotators.children);

        function closeItems() {
            allCase.forEach(
                (item) => {
                    item.classList.remove("rotator__case_active");
                }
            );
        };

        let countCase = 0;

        function run() {
            if (!allCase.length) {
                return;
            };

            closeItems();

            const timeout = allCase[countCase].dataset.speed;
            allCase[countCase].classList.add("rotator__case_active");
            allCase[countCase].style.color = allCase[countCase].dataset.color;

            countCase++;
            if (countCase === allCase.length) {
                countCase = 0;
            };

            setTimeout(run, +timeout);
        };

        run();
    }
);






