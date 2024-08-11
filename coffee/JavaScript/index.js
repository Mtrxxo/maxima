/* let bars = document.querySelector(".fa-bars");
let navTwo = document.querySelector(".nav__two");
let navTwoDiv = document.querySelector(".nav-two-div")

let cancel = document.querySelector(".fa-times");

bars.addEventListener("click",() =>{
    bars.classList.toggle("active");
});

cancel.addEventListener("click",() => {
    navTwoDiv.classList.toggle("inactive")
}) */

let bars = document.querySelector(".fa-bars");
let cancel = document.querySelector(".fa-times");
let navTwoDiv = document.querySelector(".nav-two-div");
let navTwo = document.querySelector(".nav__two");

bars.addEventListener("click",() => {
    navTwoDiv.classList.add("active")
});

cancel.addEventListener("click",() => {
    if(navTwoDiv.style.display !== "block"){
        navTwoDiv.classList.remove("active")
    }
});