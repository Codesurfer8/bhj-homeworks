const tabsElements = Array.from(document.querySelectorAll(".tabs"));

tabsElements.forEach((element) => {
    const tabs = element.querySelectorAll(".tab");
    const tabsContent = element.querySelectorAll(".tab__content")

    function closeTabs() {
        tabs.forEach((item) => item.classList.remove("tab_active"));
    };

    function closeTabsContent() {
        tabsContent.forEach((item) => item.classList.remove("tab__content_active"));
    };

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = () => {
            closeTabs();
            tabs[i].classList.add("tab_active");

            if (tabs[i].classList.contains("tab_active")) {
                closeTabsContent();
                tabsContent[i].classList.add("tab__content_active");
            };
        };
    };
});


