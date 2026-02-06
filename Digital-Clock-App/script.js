function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 1. AM ya PM ka faisla karein
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // 2. 24-hour format ko 12-hour mein badlein
    hours = hours % 12;
    hours = hours ? hours : 12; // Agar 0 ho (raat ke 12), to use 12 bana do

    // 3. Numbers ke sath '0' lagana (agar 10 se chote hon)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 4. Time string mein AM/PM add karein
    const timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
    
    document.getElementById('clock').innerHTML = timeString;
}

setInterval(updateClock, 1000);
updateClock();