
function showSidebar() {
    const navBar = document.getElementById("nav-bar");
    if (navBar.style.display == 'none') {
        navBar.style.display = 'flex';
    }
    else {
        navBar.style.display = 'none';
    }
}


const button = document.getElementById("nav-button");

button.addEventListener("click", showSidebar);