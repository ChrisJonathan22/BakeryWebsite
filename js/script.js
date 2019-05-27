const menuIcon = document.getElementsByClassName('menu-icon')[0];
const menuDrawer = document.getElementsByClassName('menu-drawer')[0];

function toggleDrawer() {  
    menuDrawer.classList.toggle('show-drawer');
}

menuIcon.addEventListener('click', toggleDrawer, false);