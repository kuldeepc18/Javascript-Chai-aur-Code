const form = document.querySelector("form")

// this will give you empty value
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // show the result
        //check the result whether it is under or over weight or normal
        if (bmi < 18.6) {
            results.innerHTML = `<span>You have under weight of ${bmi}</span> `;
        }
        else if (bmi >= 18.6 && bmi <24.9) {
            results.innerHTML = `<span>You have normal weight of ${bmi}</span> `;
        }
        else if (bmi >= 24.9) {
            results.innerHTML = `<span>You have over weight of ${bmi}</span>`;
        }
    }

})