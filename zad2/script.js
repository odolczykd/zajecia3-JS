const incrButton = document.getElementById("increment");
const switchButton = document.getElementById("switch-color");
const numberBox = document.getElementById("number-box");
let x;
let isRed = false;

incrButton.addEventListener('click', () => {
    x = Number(numberBox.innerText);
    x++;
    numberBox.innerText = x;
});

switchButton.addEventListener('click', () => {
    if(!isRed) numberBox.style.color = "red";
    else numberBox.style.color = "black";
    isRed = !isRed;
});