let allTypes = document.querySelectorAll('.container .time-options button');
let circularProgressBar = document.querySelector('.container .progress-bar');
let timer = document.querySelector('.container .progress-bar .progress-bar-value');
let startBtn = document.querySelector('.container .control-buttons .start-btn');
let stopBtn = document.querySelector('.container .control-buttons .stop-btn');

const audio = new Audio('beep_alarm.mp3')

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