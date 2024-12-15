// show sidebar 
let menuIcon = document.querySelector('.menu-icon');
let sideBar = document.querySelector('.sidebar');

menuIcon.onclick = function() {
  sideBar.classList.toggle('transform');
}

// scrolling the slider
let arrow = document.querySelector('.side-box-2 img');
let slider = document.querySelector('.exp-slider');

arrow.onclick = function() {
  slider.scrollBy(500, 0);
}