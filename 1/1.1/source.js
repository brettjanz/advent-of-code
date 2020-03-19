const inputBox = document.getElementById("input");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let input;

submitButton.onclick = () => {
    input = inputBox.value.split(" ");
    const result = calculateFuel(input);
    resultElement.innerHTML = `Fuel Needed: ${result}`;
};

function calculateFuel(input) {
    let result = 0;
    for (const mass of input) {
        result += Math.floor(mass / 3) - 2;
    }
    return result;
}
