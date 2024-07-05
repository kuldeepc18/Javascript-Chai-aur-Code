const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

//setInterval : It  repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
//Syntax : SetInterval(functionName(){}, timeInMilliseconds)
setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

