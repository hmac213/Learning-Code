var welcome = document.getElementById("welcome-animate");
var cursor = document.getElementById("welcome-cursor");

const messages = ["mathematicians", "learners", "competitors"];
var curMessageIndex = 0;
var curMessage = messages[curMessageIndex];
var showTime = 3000;
var cursorBlink = false;

function typeTimeout(minTime, lenTime) {
    return new Promise((resolve) => setTimeout(resolve, minTime + lenTime * Math.random()));
}

function wordShow(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function welcomeAnimate() {
    while (true) {
        for (let i = -1; i < curMessage.length; i++) {
            welcome.innerText = curMessage.substring(0, i + 1);
            
            await typeTimeout(50, 50);
        }
    
        await wordShow(1000);
    
        for (let i = curMessage.length + 1; i >= 0; i--) {
            welcome.innerText = curMessage.substring(0, i);
    
            await typeTimeout(25, 25);
        }
    
        await wordShow(700);
    
        if (curMessageIndex == 2) {
            curMessageIndex = 0;
        } else {
            curMessageIndex++;
        }
        curMessage = messages[curMessageIndex];
    }
}

welcomeAnimate();