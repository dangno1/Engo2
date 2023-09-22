function openNav() {
  document.getElementById("menuHamburger").style.width = "40%";
}
function closeNav() {
  document.getElementById("menuHamburger").style.width = "";
}

function openNav1() {
  document.getElementById("menuBodyHamburger").style.width = "50%";
}
function closeNav1() {
  document.getElementById("menuBodyHamburger").style.width = "";
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
