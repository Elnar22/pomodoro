'use strict';
// manage buttons 
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let stop = document.getElementById("reset");
// set timer
let choosenWM = document.getElementById("chosen_time_wm");
let choosenBM = document.getElementById("chosen_time_bm");
// set timer buttons
let plusWM = document.getElementById("plus_wm");
let minusWM = document.getElementById("minus_wm");
let plusBM = document.getElementById("plus_bm");
let minusBM = document.getElementById("minus_bm");
//timer
let wm = document.getElementById("w_minutes");
let ws = document.getElementById("w_seconds");
let bm = document.getElementById("b_minutes");
let bs = document.getElementById("b_seconds");

let startTimer;

//user timer config 
plusWM.addEventListener('click', () => {

    if (choosenWM.innerText >= 0) {
        choosenWM.innerText = +choosenWM.innerText + 5;
    }

})
minusWM.addEventListener('click', () => {
    if (choosenWM.innerText < 0) {
        choosenWM.innerText = 0;
    }
    if (choosenWM.innerText > 0) {
        choosenWM.innerText = +choosenWM.innerText - 5;
    }

})

plusBM.addEventListener('click', () => {

    if (choosenBM.innerText >= 0) {
        choosenBM.innerText = +choosenBM.innerText + 5;
    }

})
minusBM.addEventListener('click', () => {
    if (choosenBM.innerText < 0) {
        choosenBM.innerText = 0;
    }
    if (choosenBM.innerText > 0) {
        choosenBM.innerText = +choosenBM.innerText - 5;
    }

})
//Start timer function

let timer = () => {
    //work timer
    if (ws.innerText != 0) {
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }
    // break timer
    if (wm.innerText == 0 && ws.innerText == 0) {
        if (bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }
    // cycles
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = +choosenWM.innerText;
        ws.innerText = "00";

        bm.innerText = +choosenBM.innerText;
        bs.innerText = "00"

        document.getElementById("counter").innerText++;
    }
}


//Stop timer function

let stopInterval = () => {
    clearInterval(startTimer);
    startTimer = undefined;
}

//buttons
start.addEventListener('click', () => {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
        if (wm.innerText >= +choosenWM.innerText && ws.innerText == 0) {
            wm.innerText = +choosenWM.innerText;
        }
        if (bm.innerText >= +choosenBM.innerText && bs.innerText == 0) {
            bm.innerText = +choosenBM.innerText;
        }
    }
    else {
        alert("Timer is alredy running");
    }

})

reset.addEventListener('click', () => {
    wm.innerText = +choosenWM.innerText;
    ws.innerText = "00";

    bm.innerText = +choosenBM.innerText;
    bs.innerText = "00"
    document.getElementById("counter").innerText = 0;
    stopInterval();
})

pause.addEventListener('click', () => {
    stopInterval();
})