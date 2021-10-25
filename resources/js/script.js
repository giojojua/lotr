let mybutton = document.getElementById("btnUp");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let burgerbar = document.getElementById("burgerBar");
let closemenu = document.getElementById("closeMenu");
let burgermenu = document.getElementById("burgerMenu");
let burgermenupage = burgermenu.getElementsByTagName("a");

burgerbar.onclick = function () {
    burgermenu.style.display = "flex";
    closemenu.style.display = "block";
    document.body.style.overflow = "hidden"
}

closemenu.onclick = function () {
    burgermenu.style.display = "none";
    closemenu.style.display = "none";
    document.body.style.overflow = "auto";
}

function scrollNavbarMobile() {
    let mobileResolution = window.matchMedia("(max-width: 767px)")
    if (mobileResolution.matches) { // If media query matches
        burgermenu.style.display = "none";
        closemenu.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

for(let i=0; i<burgermenupage.length; i++) {
    burgermenupage[i].addEventListener("click", scrollNavbarMobile, true);
}