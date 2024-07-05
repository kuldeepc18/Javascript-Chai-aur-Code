# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```javascript

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'brown') {
            body.style.backgroundColor = e.target.id;
        }

    })
})

```
## project 2

```javascript

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

```
## project 3

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);



```