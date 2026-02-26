document.addEventListener("DOMContentLoaded", function() {

const hamburger = document.querySelector(".hamburger");
const menu_bar = document.querySelector(".navbar-menu .menu-bar");

// Hamburger
if(hamburger){
hamburger.addEventListener("click", () =>{
  menu_bar.classList.toggle("show")
});
}

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(sec => {

    const top = sec.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      sec.classList.add("show");
    }

  });

});

// Home first show
document.querySelector(".sec1").classList.add("show");

});


// Dark Mode
function darkMode() {
 document.body.classList.toggle("dark-mode");
}