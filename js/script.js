const menuIcon = document.querySelector('.menu-icon');
const menuDrawer = document.querySelector('.menu-drawer');
const toggleTextBtn = document.querySelectorAll('.toggle-text');
const contentText = document.querySelectorAll('.content-p');
const contentTextCopy = contentText;

function toggleDrawer() {  
    menuDrawer.classList.toggle('show-drawer');
}

menuIcon.addEventListener('click', toggleDrawer, false);

function toggleText(e) {
    const parentElement = e.target.parentNode;
    parentElement.classList.toggle('show-more');
}

toggleTextBtn.forEach(element => element.addEventListener('click', toggleText, false));