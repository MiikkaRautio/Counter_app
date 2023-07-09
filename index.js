const decrease = document.getElementById("decreaseButton");
const reset = document.getElementById("resetButton");
const increase = document.getElementById("increaseButton");
let counter = 0;

increase.addEventListener("click", () => {
    let number = document.getElementById("number");
    counter++;
    number.innerText = counter;
});

decrease.addEventListener("click", () => {
    let number = document.getElementById("number");
    counter--;
    number.innerText = counter;
});

reset.addEventListener("click", () => {
    let number = document.getElementById("number");
    counter = 0;
    number.innerText = 0;
});
