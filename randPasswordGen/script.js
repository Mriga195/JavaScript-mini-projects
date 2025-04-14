const sbmt = document.getElementById("sbmt");
const letter = document.getElementById("letter");
const characters = document.getElementById("characters");
const len = document.getElementById("len");
const output = document.getElementById("output");

sbmt.onclick = function() {

    const password = [];

    for (let i  = 0; i < Number(len.value); i++)
    {
        const temp = Math.floor(Math.random() * 10);
        password.push(temp);
    }

    output.innerText = password.join("");
}