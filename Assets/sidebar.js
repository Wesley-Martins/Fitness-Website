const openbtn = document.querySelector(".openbtn");
const closebtn = document.querySelector(".closebtn");
const sidebar = document.querySelector(".sidebar");
const items = document.querySelectorAll(".sidebar__item");

openbtn.onclick = () => {
    if (window.innerWidth < "700") {
        sidebar.style.width = "70%"
    }
    else {
        sidebar.style.width = "25%"
    }
    
    items.forEach(item => {
        item.style.display = "block"
    })
};

closebtn.onclick = () => {
    sidebar.style.width = "0";
    items.forEach(item => {
        item.style.display = "none";
    })
}
