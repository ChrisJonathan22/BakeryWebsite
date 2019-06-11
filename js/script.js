const menuIcon = document.querySelector('.menu-icon');
const menuDrawer = document.querySelector('.menu-drawer');
const toggleTextBtn = document.querySelectorAll('.toggle-text');
const contentText = document.querySelectorAll('.content-p');
console.log(toggleTextBtn);

function toggleDrawer() {  
    menuDrawer.classList.toggle('show-drawer');
}

menuIcon.addEventListener('click', toggleDrawer, false);

function textLimit(str, length, ending) {
    str.forEach(text => {
        if (text.innerText.length === null) {
            length = 50;
        }
        if (ending === null) {
            ending = '...';
        }
        if (text.innerText.length > length) {
            text.innerText = text.innerText.substring(0, length - ending.length) + ending;
        }
        console.log(text.innerText);
    });  
}

textLimit(contentText, 100, '...');

function toggleText(e) {
    console.log(e.target);
    // console.table(e.target);
    console.log(e.target.parentNode);
    const parentElement = e.target.parentNode;
    parentElement.classList.toggle('show-more');
}

toggleTextBtn.forEach(element => element.addEventListener('click', toggleText, false));