const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const days = document.getElementById('days');
const container = document.getElementById('container');

const currentYear = new Date().getFullYear();

//testing New Year Message
const timeNextYear = new Date(`January 01 2020 00:00:00`);
/*
const timeNextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
*/

function updateContainer (){
    const timeNow = new Date();
    const result = timeNextYear - timeNow;

    const s = Math.floor
    (result / 1000) % 60;

    const m = Math.floor
    (result / 1000 / 60) % 60;

    const h = Math.floor
    (result / 1000 / 60 /60) % 24;

    const d = Math.floor
    (result / 1000 / 60 /60 /24);

    seconds.innerHTML = s +(" seconds");
    minutes.innerHTML = m +(" minutes");
    hours.innerHTML = h +(" hours");;
    days.innerHTML = d + (" days");

    //New Year's Message
    if (result <0) {
        document.getElementById("title").innerHTML = "Happy New Year!"
    }
}

setInterval(updateContainer, 1000);




