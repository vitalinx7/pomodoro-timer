let allTypes = document.querySelectorAll('.container .time-options button');
let circularProgressBar = document.querySelector('.container .progress-bar');
let timer = document.querySelector('.container .progress-bar .progress-bar-value');
let startBtn = document.querySelector('.container .control-buttons .start-btn');
let stopBtn = document.querySelector('.container .control-buttons .stop-btn');

const audio = new Audio ("beep_alarm.mp3")

let getType =(elem, type)=> {
    for(x of allTypes){
        x.classList.remove('active');
    }
    elem.classList.add('active');
    pomodoroType = type;
    resetTimer();
}

const pomodoroTimerInSec = 1500; //60sec x 25min
const shortBreakTimeInSec = 300; //60sec x 5min
const longBreakInSec = 900; //60sec x 15min
const timer_type_pomodoro = 'Pomodoro';
const timer_type_shortbreak = 'Shortbreak';
const timer_type_longbreak = 'Longbreak';
let pomodoroType = timer_type_pomodoro;
let progressInterval;
let timerValue = pomodoroTimerInSec;
let multipleFactor = 360 / timerValue;

let formatedInNumberInMinutes = (number)=> {
    const minutes = Math.trunc(number / 60).toString().padStart(2,'0');
    const seconds = Math.trunc(number % 60).toString().padStart(2,'0');

    return `${minutes}:${seconds}`;
}

const startTimer =()=> {
    progressInterval = setInterval(()=> {
        timerValue--;
        circleProgress();
    },1000)
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
}

const stopTimer =()=> {
    clearInterval(progressInterval);
    stopBtn.style.display = 'none';
    startBtn.style.display = 'block';
}

let resetTimer =()=> {
    clearInterval(progressInterval);
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';

    if (pomodoroType === 'Pomodoro'){
       timerValue = pomodoroTimerInSec;
    } else if (pomodoroType === 'Shortbreak'){
        timerValue = shortBreakTimeInSec;
    } else {
        timerValue = longBreakInSec;
    }
    multipleFactor = 360 / timerValue;
    circleProgress();
    audio.stop();
}

let circleProgress =()=> {
    if(timerValue == 0){
        stopTimer();
        audio.play();
    }
    timer.innerHTML = `${formatedInNumberInMinutes(timerValue)}`;
    circularProgressBar.style.background = `conic-gradient(#664efe ${timerValue * multipleFactor}deg, #422f66 0deg)`;
}