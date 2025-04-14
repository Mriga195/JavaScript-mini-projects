let input = document.getElementById("inp");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelsius = document.getElementById("toCelsius");
let submit = document.getElementById("sbmt");
let output = document.getElementById("output")

submit.onclick = function () {

    temp = Number(input.value);
    if (input.value === "")
    {
        output.textContent = 'Please provide a temperature';
        return;
    }
    if (toCelsius.checked)
    {
        temp = (5/9) * (temp-32);
        output.textContent = 'Temp is ' + temp.toFixed(1) + ' C';
        toCelsius.checked = false;
    }else if (toFahrenheit.checked)
    {
        temp = (9/5*temp) + 32;
        output.textContent = 'Temp is ' + temp.toFixed(1) + ' F';
        toFahrenheit.checked = false;
    }else{

        output.textContent = 'Please provide a temperature';
    }

}