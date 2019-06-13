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




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}