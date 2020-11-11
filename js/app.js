document.getElementById("rollDice").addEventListener("click", random);


function random() {
    let value = Math.floor((Math.random() * 6) + 1);
    // console.log(value);
    let filename = value + ".png";
    // console.log(filename);
    document.getElementById("diceImage").src = filename;
    document.getElementById("days").innerHTML = value + " dagar hemma";
}