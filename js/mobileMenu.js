(() => {
    const menu = document.querySelector(".js-menu");
    const button = document.querySelector(".js-button");

    const toggleClass = () => {
        menu.classList.toggle("menu--opened");
        button.classList.toggle("button--opened");
    }

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
}) ();