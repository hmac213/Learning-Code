let problems = [
    "John and Jill are playing a game. They take turns flipping a coin until one of them lands on heads. What is he probability that Jill wins if John goes first?",
    "What is the area of the largest possible triangle that can be inscribed in a circle with radius $3$?",
    "What is the minimum distance that a bug must travel on the surface of a frustrum in order to reach the point opposite its starting point?"
]

let difficultyRatings = [
    "AMC 1-5",
    "AMC 5-10",
    "AMC 11-15",
    "AMC 16-19",
    "AMC 20-22",
    "AMC 23-25",
    "AIME 1-3",
    "AIME 4-6",
    "AIME 7-9",
    "AIME 10-12",
    "AIME 13-15",
    "Pre-Olympiad",
    "USAJMO",
    "USAMO",
    "IMO 6"
]

let categories = [
    "Algebra",
    "Geometry",
    "Number Theory",
    "Cominatorics"
]

function createReview(problem) {
    const sectionContainer = document.getElementById('problem-review-container');

    const container = document.createElement('div');
    const problemTitle = document.createElement('h2');
    const problemContent = document.createElement('p');
    
    const problemTitleText = document.createTextNode('Problem');
    const problemContentText = document.createTextNode(problem);

    const problemAccept = document.createElement('button');
    const problemDeny = document.createElement('button');
    const problemModify = document.createElement('button');

    const buttonContainer = document.createElement('div');
    const problemAcceptText = document.createTextNode('Accept');
    const problemDenyText = document.createTextNode('Deny');
    const problemModifyText = document.createTextNode('Modify');

    container.appendChild(problemTitle);
    container.appendChild(problemContent);
    container.appendChild(buttonContainer);

    problemTitle.appendChild(problemTitleText);
    problemContent.appendChild(problemContentText);
    sectionContainer.appendChild(container);

    buttonContainer.appendChild(problemAccept);
    buttonContainer.appendChild(problemDeny);
    buttonContainer.appendChild(problemModify);
    problemAccept.appendChild(problemAcceptText);
    problemDeny.appendChild(problemDenyText);
    problemModify.appendChild(problemModifyText);

    container.classList.add('problem-container');
    problemTitle.classList.add('problem-title');
    problemContent.classList.add('problem-content');

    buttonContainer.className = 'problem-action-button-container';
    problemAccept.className = 'problem-accept-button default-button';
    problemDeny.className = 'problem-deny-button default-button';
    problemModify.className = 'problem-modify-button default-button';

}

problems.forEach(createReview);