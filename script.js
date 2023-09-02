const celsiusInput = document.getElementById("celsius");
const convertBtn = document.getElementById("convertBtn");
const resultElement = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = celsiusToFahrenheit(celsius);
        resultElement.textContent = `${celsius.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultElement.textContent = "Please enter a valid number.";
    }
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

