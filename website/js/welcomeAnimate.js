var welcome = document.getElementById("welcome-animate");
var cursor = document.getElementById("welcome-cursor");

const messages = [" mathematicians", " learners", " competitors"];
var curMessageIndex = 0;
var curMessage = messages[curMessageIndex];
var showTime = 3000;

function typeTimeout(minTime, lenTime) {
    return new Promise((resolve) => setTimeout(resolve, minTime + lenTime * Math.random()));
}

function wordShow() {
    return new Promise((resolve) => cursorAnimate(resolve));
}

async function welcomeAnimate() {
    while (true) {
        for (let i = -1; i < curMessage.length; i++) {
            welcome.innerText = curMessage.substring(0, i + 1);
            
            await typeTimeout(50, 50);
        }
    
        await wordShow();
    
        for (let i = curMessage.length + 1; i >= 0; i--) {
            welcome.innerText = curMessage.substring(0, i);
    
            await typeTimeout(25, 25);
        }
    
        await wordShow();
    
        if (curMessageIndex == 2) {
            curMessageIndex = 0;
        } else {
            curMessageIndex++;
        }
        curMessage = messages[curMessageIndex];
    }
}

function cursorAnimate(resolve) {
    let timeElapsed = 0;
    cursor.style.opacity = 1;
    let frameNum = 0;
    let interval = setInterval(frame, 50);

    function frame() {
        if (timeElapsed >= 3000) {
            clearInterval(interval);
            cursor.style.opacity = 1;
            resolve();
        } else {
            if (frameNum < 10 || (frameNum >= 20 && frameNum < 30) || (frameNum >= 40 && frameNum < 50)) {
                cursor.style.opacity = Math.max(0, parseFloat(cursor.style.opacity) - 0.2);
            } else {
                cursor.style.opacity = Math.min(1, parseFloat(cursor.style.opacity) + 0.2);
            }
            frameNum++;
            timeElapsed+= 50;
        }
    }
}

welcomeAnimate();