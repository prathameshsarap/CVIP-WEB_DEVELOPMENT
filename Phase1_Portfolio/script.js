document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#skills-projects"]');
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        smoothScroll("#skills-projects");
    });

    function smoothScroll(targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    }
});
