const hambutton = document.getElementById("hambutton");
const navbarLinks = document.querySelector("nav div.navbar-links");
const icons_buttons = document.querySelector("nav div.right");
hambutton.addEventListener("click",function(){
    navbarLinks.classList.toggle("responsive");
    icons_buttons.classList.toggle("responsive");
})