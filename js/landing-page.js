const sidebar = document.getElementById("sidebar");
const button = document.getElementById("nav-button");
const body = document.getElementsByClassName("main-content")[0];


button.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    button.classList.toggle("on");

    document.querySelector(".main-content").classList.toggle("shifted");

});


function typeText(element, text, delay = 100, callback) {
    element.style.visibility = "visible"; 
    element.textContent = ""; 
    let i = 0;

    function typeNext() {
        if (i < text.length) {
            setTimeout(typeNext, delay);
            element.textContent += text[i];
            i++;

        } else if (callback) {
            callback();
        }
    }

    typeNext();
}


const header = document.getElementById("greeting");
const footer = document.getElementById("greeting-footer");

typeText(header, "Welcome to my Website", 100, () => {
    typeText(footer, "Made by Quinn Olney", 100);
});
