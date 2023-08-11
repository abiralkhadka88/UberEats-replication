// sidenav bar

closeNav();

function openNav() {
  document.getElementById("mySidenav").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.body.style.overflow = "auto";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.querySelector("nav");
var search_bar = document.querySelector(".search-bar");
var foodBtn = document.querySelector(".find-food-elements");
// console.log(header);

// Get the offset position of the navbar
var sticky = header.offsetTop;

var foodBtn = foodBtn.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (window.pageYOffset > foodBtn) {
    if (window.innerWidth > 768) {
      search_bar.style.display = "flex";
      document.querySelector(".bg-white").style.backgroundColor = "#eee";
    }
  } else {
    search_bar.style.display = "none";
  }
}
