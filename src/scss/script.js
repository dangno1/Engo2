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

function boxGreen() {
  const boxGreen = document.querySelector(".setups__time-box");
  const price = document.querySelector(".price");
  const priceTwo = document.querySelector(".price-2");

  if (boxGreen.classList.contains("moving")) {
    boxGreen.classList.remove("moving");
    price.innerHTML = "19";
    priceTwo.innerHTML = "49";
  } else {
    boxGreen.classList.add("moving");
    price.innerHTML = "15.2";
    priceTwo.innerHTML = "39.8";
  }
}

function bannerBox() {
  const bannerBox = document.querySelector(".banner__bottom-box");
  const bannerText = document.querySelector(".banner__bottom-text");

  if (bannerBox.classList.contains("bg-green")) {
    bannerBox.classList.remove("bg-green");
    bannerText.innerHTML = "How It Works";
  } else {
    bannerBox.classList.add("bg-green");
    bannerText.innerHTML = "It Works";
  }
}

