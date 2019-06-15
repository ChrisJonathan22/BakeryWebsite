const menuIcon = document.querySelector('.menu-icon');
const menuDrawer = document.querySelector('.menu-drawer');
const contentContainer = document.getElementsByClassName('')
const accordion = [...document.getElementsByClassName("accordion")];
let i;

function toggleDrawer() {  
    menuDrawer.classList.toggle('show-drawer');
}

menuIcon.addEventListener('click', toggleDrawer, false);

function toggleText(e) {
    const parentElement = e.target.parentNode;
    parentElement.classList.toggle('show-more');
}

function toggleAccordion() {
  this.classList.toggle('active');
  this.parentElement.classList.toggle('toggle-container');
  const panel = this.nextElementSibling;
  const panelChild = this.nextSibling;
  panel.classList.toggle('toggle-accordion');
  panelChild.nextSibling.children[0].classList.toggle('toggle-text');
}

accordion.forEach(acc => {
  acc.addEventListener('click', toggleAccordion, false);
});