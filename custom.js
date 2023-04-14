$(document).on('click', '#Nav ul a', function () {
    $(this).addClass('nav-active').siblings().removeClass('nav-active')
})

window.addEventListener("scroll", function () {
    const nav = document.querySelector(".top-nav");
    nav.classList.toggle("top-nav-active", this.window.scrollY > 0);
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".web-loader");

    loader.classList.add("loaded")
})