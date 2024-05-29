let buttonTest = document.getElementById("button");
let tg_btn = document.getElementById("h2-paragraph");
let tg_main = document.getElementById("body-main");

function onClick(){
    tg_btn.classList.toggle("h2-initial");
    tg_btn.classList.toggle("h2-finals");

    tg_main.classList.toggle("body-initial");
    tg_main.classList.toggle("body-finals");
}