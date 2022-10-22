// @ts-nocheck
const navIconEl = document.querySelector(".nav__icon");
const navCloseEl = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const navBgOverlayEl = document.querySelector(".nav__bgOverlay");
const body = document.getElementsByTagName("body");
const navOpen = () => {
    navList?.classList.add("show");
    navBgOverlayEl?.classList.add("active");
    document.body.style =
        "visibility:visible;height:100vh;width:100vw;overFlow:hidden;";
};

const navClose = () => {
    navList?.classList.remove("show");
    navBgOverlayEl?.classList.remove("active");
    document.body.style =
        "visibility:visible;height:initial;width:100%;overFlow-x:hidden;";
};
const check = () => console.log("BodyBuilder");

navIconEl?.addEventListener("click", navOpen);
navCloseEl?.addEventListener("click", navClose);
navBgOverlayEl?.addEventListener("click", navClose);
body[0].addEventListener("click", check);

/* ----- Banner ----- */

// AOS CONFIG
AOS.init({
    offset: 200,
    delay: 150,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
});
