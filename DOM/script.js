console.dir(document);

document.title = "DOM Manipulation";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
document.body.style.color = "beige";

const username = "Mriganka Mahanta";

const welcomeMsg = document.getElementById("welcome");
welcomeMsg.textContent += username === "" ? guest : username;