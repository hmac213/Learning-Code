var info = document.getElementById("register-info");
var questions = document.getElementById("register-questions");

var selectInfo = document.getElementById("register-info-selector");
var selectQuestions = document.getElementById("register-questions-selector");

var onInfo = true;
var onQuestions = false;

selectInfo.addEventListener("click", showInfo());
selectQuestions.addEventListener("click", showQuestions());

function showInfo() {
    onInfo = true;
    onQuestions = false;

    info.style.display = 'flex';
    questions.style.display = 'none';
}

function showQuestions() {
    onInfo = false;
    onQuestions = true;

    info.style.display = 'none';
    questions.style.display = 'flex';
}

