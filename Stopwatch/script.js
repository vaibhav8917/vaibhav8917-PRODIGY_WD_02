const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const stopwatch = document.getElementById('stopwatch');
const LapBox = document.getElementById('lapTimes');
let stat = false;
let stopwatchInterval;
let paraIndex=0;

var time = 0;

function updateStopwatch(){
    time++;
    
    if(time>0)
    {
        var hr = Math.floor(time / 3600);
        var min = Math.floor((time / 60) - (hr*60));
        var sec = time - ((hr*3600) + (min*60));

        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        hour.innerText = hr;
        minute.innerText = min;
        second.innerText = sec;
    }
}

function startStopwatch(){
    if(!stat)
    {
        stat = true;
        stopwatchInterval=setInterval(() => {
            updateStopwatch()
        }, 1000);
    }
}

function pauseStopwatch(){
    clearInterval(stopwatchInterval);
    stat = false;
}

function resetStopwatch(){
    clearInterval(stopwatchInterval);
    stat = false;
    time = 0;
    hour.innerText = '00';
    minute.innerText = '00';
    second.innerText = '00';
    location.reload();
}

function lapTime(){
    paraIndex++;
    let para = document.createElement('p');
    para.innerHTML = `${paraIndex}. ${stopwatch.innerText}`;
    LapBox.appendChild(para);
}
