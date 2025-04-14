let output = document.getElementById("num");
output.innerText = 0;

document.getElementById("submit").onclick = function() {
    let max = Number(document.getElementById("max").value);
    let min = Number(document.getElementById("min").value);


    let rand = Math.floor(Math.random() * (max - min)) + min;
    output.innerText = rand;
}

