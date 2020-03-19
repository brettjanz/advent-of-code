const inputBox = document.getElementById("input");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let input;

submitButton.onclick = () => {
    input = inputBox.value.split(" ");
    const result = getResult(input);
    resultElement.innerHTML = `Fuel Needed: ${result}`;
    console.log(result);
};

function getResult(input) {
    let total = 0;
    for (const mass of input) {
        total += calculateFuel(mass);
    }
    return total;
}

function calculateFuel(mass) {
    let fuel = Math.floor(mass / 3) - 2;
    console.log("Calculated fuel: " + fuel);
    if (fuel > 0) {
        fuel += calculateFuel(fuel);
    }

    return fuel > 0 ? fuel : 0;
}
