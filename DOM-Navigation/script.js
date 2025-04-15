// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "red";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ul) => {
    const firstChild = ul.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})