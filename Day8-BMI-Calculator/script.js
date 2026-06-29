const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calculateBtn = document.querySelector("#calculateBtn");
const bmiResult = document.querySelector("#bmiResult");
const statusText = document.querySelector("#status");

calculateBtn.addEventListener("click", () => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!height || !weight) {
        alert("Please enter valid height and weight");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    bmiResult.innerText = bmi;

    if (bmi < 18.5) {
        statusText.innerText = "Underweight";
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
        statusText.innerText = "Normal Weight";
    } 
    else if (bmi >= 25 && bmi < 29.9) {
        statusText.innerText = "Overweight";
    } 
    else {
        statusText.innerText = "Obese";
    }
});