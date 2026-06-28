function showMessage(){

alert("Welcome to my website!");

}

function toggleTheme(){

document.body.classList.toggle("dark");

}

let count = 0;

let target = 500;

let counter = setInterval(()=>{

count++;

document.getElementById("count").innerHTML = count;

if(count>=target){

clearInterval(counter);

}

},5);

function updateClock(){

let now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();
