const button = document.getElementById("menu-button");
button.addEventListener("click", handleButtonClick);

function handleButtonClick() {
    const header = document.getElementById("header");
    console.log(header.dataset);
    if(header.dataset.visible === "true") {
        header.setAttribute("data-visible", false);
    } else {
        header.setAttribute("data-visible", true);
    }
}