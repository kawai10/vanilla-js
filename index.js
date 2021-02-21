const title = document.querySelector("#title");

const BASE_COLOR = "white";
const OTHER_COLOR = "blue";

function handleclick() {
    const currenColor = title.style.color;
    if (currenColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.addEventListener("click", handleclick);
    title.style.color = BASE_COLOR;
}
init();