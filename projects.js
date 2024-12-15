// show sidebar 
let menuIcon = document.querySelector('.menu-icon');
let sideBar = document.querySelector('.sidebar');

menuIcon.onclick = function() {
  sideBar.classList.toggle('transform');
}