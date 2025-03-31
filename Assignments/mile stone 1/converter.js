const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// arguments
const celsiusTemperature = 25;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log("Celsius:", celsiusTemperature);
console.log("Fahrenheit:", fahrenheitTemperature);
