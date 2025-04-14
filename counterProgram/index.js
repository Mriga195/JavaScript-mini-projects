let counter= 0;
document.getElementById("count").innerText = counter;

document.getElementById("res").onclick = function() {
    counter = 0;
    document.getElementById("count").innerText = counter;
}

document.getElementById("inc").onclick = function() {
    counter++;
    document.getElementById("count").innerText = counter;
}

document.getElementById("dec").onclick = function() {
    counter--;

    document.getElementById("count").innerText = counter;
}



