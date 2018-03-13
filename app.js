function clock() {

const date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let spanHour = document.getElementById("hrs");
let spanMinute = document.getElementById("mins");
let spanSecond = document.getElementById("secs");

spanHour.innerHTML = hours + " :";
spanMinute.innerHTML = minutes + " :";
spanSecond.innerHTML = seconds;


if (hours.toString().length < 2) {
   spanHour.innerHTML = "0" + hours + " :";
};

if (minutes.toString().length < 2) {
   spanMinute.innerHTML = "0" + minutes + " :";
};

if (seconds.toString().length < 2) {
   spanSecond.innerHTML = "0" + seconds;
};

}

setInterval(clock, 100)
