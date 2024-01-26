let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessField").value);
    let message = document.getElementById("message");
    
    if (userGuess === randomNumber) {
        message.textContent = `Selamat! Anda menebak angka ${randomNumber} dengan benar dalam ${guessCount + 1} tebakan.`;
        message.style.color = "green";
        disableInput();
    } else if (userGuess < randomNumber) {
        message.textContent = "Tebakan Anda terlalu rendah. Coba lagi!";
        message.style.color = "red";
    } else {
        message.textContent = "Tebakan Anda terlalu tinggi. Coba lagi!";
        message.style.color = "red";
    }
    
    guessCount++;
}

function disableInput() {
    document.getElementById("guessField").disabled = true;
    document.querySelector("button").disabled = true;
}
