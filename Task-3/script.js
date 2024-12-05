document.getElementById("convert-button").addEventListener("click", function () {
  const temperature = document.getElementById("temperature").value;
  const inputUnit = document.getElementById("input-unit").value;
  const outputUnit = document.getElementById("output-unit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temperature) || temperature === "") {
    resultDiv.textContent = "Please enter a valid number!";
    resultDiv.style.color = "red";
    return;
  }

  const temp = parseFloat(temperature);
  let convertedTemp;

  // Conversion logic
  if (inputUnit === outputUnit) {
    convertedTemp = temp; // No conversion needed
  } else if (inputUnit === "celsius") {
    if (outputUnit === "fahrenheit") {
      convertedTemp = temp * 9/5 + 32;
    } else if (outputUnit === "kelvin") {
      convertedTemp = temp + 273.15;
    }
  } else if (inputUnit === "fahrenheit") {
    if (outputUnit === "celsius") {
      convertedTemp = (temp - 32) * 5/9;
    } else if (outputUnit === "kelvin") {
      convertedTemp = (temp - 32) * 5/9 + 273.15;
    }
  } else if (inputUnit === "kelvin") {
    if (outputUnit === "celsius") {
      convertedTemp = temp - 273.15;
    } else if (outputUnit === "fahrenheit") {
      convertedTemp = (temp - 273.15) * 9/5 + 32;
    }
  }

  resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${outputUnit}`;
  resultDiv.style.color = "#333";
});
