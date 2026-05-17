// const slider = document.querySelector('.slider');
// const nextBtn = document.querySelector('.next');

// let currentSlide = 0;
// const totalSlides = document.querySelectorAll('.slide').length;

// nextBtn.addEventListener('click', () => {
//     currentSlide++;

//     if (currentSlide >= totalSlides) {
//         currentSlide = 0;
//     }

//     slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
// });



let icon = document.getElementById("icon");
let bur1 = document.getElementById("bur1");
let bur2 = document.getElementById("bur2");
let bur3 = document.getElementById("bur3");
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
  bur1.classList.toggle("active1");
  bur2.classList.toggle("active1");
  bur3.classList.toggle("active1");
}
function setActive(element) {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => link.classList.remove('active')); // remove active from all
  element.classList.add('active'); // add active to clicked on
}


// ====== Active Link Scroll Effect ======
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150; // small offset for early activation
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }})
  });



const toggleBtns = document.querySelectorAll("#Hire");
const overlay = document.querySelector(".overlay");
const close = document.getElementById("close");

// Open modal for all Hire buttons
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.style.display = "block";
  });
});

// Close modal
close.addEventListener("click", () => {
  overlay.style.display = "none";
});

