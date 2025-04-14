let btn = document.getElementById("btn");
let noOfDice = document.getElementById("inpt");
let outputText = document.getElementById("dices");
let imgDices = document.getElementById("imgDices");

btn.onclick = function() {
    const num = Number(noOfDice.value);

    if (num > 6 || num < 0)
    {
        imgDices.innerHTML = "";
        outputText.textContent = `Enter a number between 1 and 6`;
        return;
    }

    const dices = [];
    const images = [];
    for (let i = 0; i < num; i++)
    {
        const temp = Math.floor(Math.random() * 6) + 1;
        dices.push(temp);
        images.push(`<img src="images/num${temp}.png" alt= "Dice ${temp}">`);
    }

    outputText.textContent = `dice: ${dices.join(', ')}`;
    imgDices.innerHTML = images.join('');
}