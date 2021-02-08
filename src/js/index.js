var link = document.getElementById("header--burger--link");
link.addEventListener("click", (e) => {
    e.preventDefault();
    var burger = document.getElementById("header--burger");
    burger.classList.toggle("open");

    var mobileMenu = document.getElementById("mobile--menu");
    mobileMenu.classList.toggle("active");

    var body = document.getElementById("body");
    body.classList.toggle("open");
})