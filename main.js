let input1 = document.getElementById("fromValue");
let input2 = document.getElementById("fromValue2");
console.log(input1);
console.log(input2);

function celsiusToFahrenheit(celsius) {
    // Check if input is a number
    if (isNaN(celsius)) {
      return;
    }

     // Conversion formula
  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  console.log(celsius);
  console.log(fahrenheit);
  console.log(kelvin);

    // Return the results as an object for clarity
    return {
        celsius: celsius,
        fahrenheit: fahrenheit.toFixed(2),
        kelvin: kelvin
      };


}


input1.addEventListener("input", function(event) {
   const inputValue = event.target.value;
   celsiusToFahrenheit(inputValue);
})


input2.addEventListener("input", function(event) {
    const inputValue = event.target.value;
    celsiusToFahrenheit(inputValue);
 })

 