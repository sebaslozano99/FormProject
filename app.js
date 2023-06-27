const BURGER = document.querySelector(".burger");
const MENU = document.querySelector(".menu");

BURGER.addEventListener("click", () => {
    BURGER.classList.toggle("active");
    MENU.classList.toggle("active");
})


document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    BURGER.classList.remove("active");
    MENU.classList.remove("active");
}))



// code to form
const SUBMIT = document.getElementById("contact_us");
const FORM = document.querySelector(".page-two");


SUBMIT.addEventListener("click", () => {
    FORM.classList.toggle("active");
})


document.getElementById("exit").onclick = function(){
    FORM.classList.remove("active");
}