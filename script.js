const hambutton = document.getElementById("hambutton");
const navbarLinks = document.querySelector("nav div.navbar-links");
const right = document.querySelector("nav div.right");
hambutton.addEventListener("click",function(){
    navbarLinks.classList.toggle("responsive");
    right.classList.toggle("responsive");
    // console.log(hambutton.classList);
})