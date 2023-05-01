
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}



const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

document.getElementById('add-new').addEventListener('click', () => {
  document.querySelector('.add-item-container').style.display=''
})

document.getElementById('add-new-cancel').addEventListener('click', () => {
  document.querySelector('.add-item-container').style.display = 'none';
})