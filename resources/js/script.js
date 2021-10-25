let mybutton = document.getElementById("btnUp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.onclick = function (topFunction) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}