const timeEl = document.getElementById("timer");
const startBottonEl = document.getElementById("start");
const stopBottonEl = document.getElementById("stop");
const resetBottonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timeEl.textContent = formatTime(elapsedTime);
        
    }, 25);
    startBottonEl.disabled = true;
    stopBottonEl.disabled = false;

}
function formatTime(elapsedTime){
    const miliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (60000)) / 1000);
    const minuts = Math.floor((elapsedTime % (3600000)/60000));
    const hours = Math.floor((elapsedTime /3600000));

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
        (minuts ? (minuts > 9 ? minuts : "0" + minuts) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
        (miliseconds > 9 ? miliseconds : "0" + miliseconds)
        );
}
function stopTimer(){
    clearInterval(timerInterval);
    startBottonEl.disabled = false;
    stopBottonEl.disabled = true;
}
function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    timeEl.textContent = "00:00:00"

    startBottonEl.disabled = false;
    stopBottonEl.disabled = false;

}
startBottonEl.addEventListener("click", startTimer);
stopBottonEl.addEventListener("click", stopTimer);
resetBottonEl.addEventListener("click", resetTimer);
