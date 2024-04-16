//Creating animation for homepage.

const basePhrase = 'Creating ';
const phrases = ['mathematicians', 'learners', 'competitors'];
const el = document.getElementById("welcome-message-animate");

function charSleep(msMin, msRange) {
    return new Promise((resolve) => setTimeout(resolve, msMin + msRange*Math.random()));
}

function wordSleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

let sleepTime = 100;
let curPhraseIndex = 0;

async function writeLoop() {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = -1; i < curWord.length; i++) {
            el.innerText = basePhrase + curWord.substring(0, i + 1);
            await charSleep(50, 50);
        }

        await wordSleep(1000);

        for (let i = curWord.length; i > -2; i--) {
            el.innerText = basePhrase + curWord.substring(0, i + 1);
            await charSleep(40, 20);
        }

        await wordSleep(500);

        if (curPhraseIndex < 2) {
            curPhraseIndex++;
        } else {
            curPhraseIndex = 0;
        }
    }
}

writeLoop();
