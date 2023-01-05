// GIVEN I am takina a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
let contentEl = document.querySelector(".content")
let startBtn = document.getElementById("start-button");
let quizStart = document.getElementById('quiz-start');
let startPageHeader = document.getElementById('start-page-header');
let answerResult = document.getElementById('answer-result')
let answerBtn ;//answer buttons
let currentQuestion; //question p
let currentAnswers;
let xQuestion = 0;
let timeOnClock = 60; //amount of time to start
let timeEl = document.getElementById('time-id');//span to house ticking time
timeEl.textContent = timeOnClock
let timeInt = ""; //time interval (1 sec or 1000ms)
let score = 0; //starting score
let scoreEl = document.querySelector('.user-score-class');//span element to house score
scoreEl.textContent = score + "%"; //score to be displayed
let scoreInt = 10; //Amount added to score for each correct answer
let quizEnd = document.querySelector('.quiz-end'); //div class of "quiz-end"
quizEnd.remove();
let userScoreEl = document.getElementById('user-scores');
userScoreEl.remove();
let scoresPage = document.querySelector(".scores-page");
let userScores = document.querySelector(".user-scores");

// finalScore.remove();



// submitScore.textContent;




let questionAnswerObjArr = [
    {
        question: 'String values must be enclosed within___________when being assigned to variables.',
        answers: [
            'Commas',
            'Curly Brackets',
            'Quotes',
            'Parentheses',],
        answer: 'Quotes',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            'JavaScript',
            'Terminal / Bash',
            'A For Loop',
            'Console.log()',],
        answer: 'Console.log()',
    },
    {
        question: 'One proper syntax for declaring a function called "Do Stuff" in JavaScript is:',
        answers: [
            'function doStuff()',
            'function: do Stuff',
            'doStuff',
            'DOSTUFF!',],
        answer: 'function doStuff()',
    },
    {
        question: 'JavaScript is written in a way that separates words by making the first letter of each word capital and not using spaces which is called:',
        answers: [
            'donkeyCase',
            'camelCase',
            'fishCase',
            'dogCase',],
        answer: 'camelCase',
    },
    {
        question: 'Variables that can be accessed by any function are known as__________.',
        answers: [
            'Worldly',
            'Well Traveled',
            'Frequent Flyers',
            'Global',],
        answer: 'Global',
    },
    {
        question: 'An object data type can contain:',
        answers: [
            'An object',
            'An array',
            'A date',
            'All of the Above',],
        answer: 'All of the Above',
    },
    {
        question: 'An object data type can contain:',
        answers: [
            'An object',
            'An array',
            'A date',
            'All of the Above',],
        answer: 'All of the Above',
    },
    {
        question: 'An object data type can contain:',
        answers: [
            'An object',
            'An array',
            'A date',
            'All of the Above',],
        answer: 'All of the Above',
    },
    {
        question: 'An object data type can contain:',
        answers: [
            'An object',
            'An array',
            'A date',
            'All of the Above',],
        answer: 'All of the Above',
    },
    {
        question: 'An object data type can contain:',
        answers: [
            'An object',
            'An array',
            'A date',
            'All of the Above',],
        answer: 'All of the Above',
    },
]

function startQuiz(){
    timeInt = setInterval(startClock,1000);
}

function startClock() {
    timeOnClock--;
    timeEl.textContent = timeOnClock;
    
    if(timeOnClock <= 0) {
        return endQuiz();
    }
}

function endQuiz(){
        clearInterval(timeInt);
        currentAnswers.remove();
        currentQuestion.remove();
    
        contentEl.append(quizEnd);
    
        // finalScore.innerHTML = ("Your Final Score is: " + score);
       
        let submitScore = document.querySelector(".submit-button");
        submitScore.addEventListener('click', saveScore);
         // let key = document.getElementById('initials').value;
        // var submitScore = document.querySelector(".submit-button");
}

function saveScore(event) {
    event.preventDefault();
    
    let submitScore = document.querySelector(".submit-button");
    // var finalScore = document.getElementById('final-score')

   
    if (submitScore) {
        var quizHome = document.createElement('button');
        quizHome.textContent = "Try Again"
        
        var key = document.querySelector('#initials').value;
        localStorage.setItem(key,score)
        

        Object.keys(localStorage).forEach((key) => {
         
            var highScoresList = document.createElement('ol');
            highScoresList.setAttribute('id', key);
            highScoresList.setAttribute('class','score-list');
            var savedScoreList = document.createElement('li');
            savedScoreList.setAttribute('id','score-list');
            savedScoreList = JSON.parse(localStorage.getItem(key));
            let userScoreId = document.createElement('span');
            userScoreId.setAttribute('id',"user-score-id");
            highScoresList.append(savedScoreList);
            scoresPage.append(userScoreEl);
            userScoreEl.append(userScoreId);
            quizEnd.remove();
            answerResult.remove();
            userScoreId.textContent = key + ' ' + savedScoreList+ '%'
        })
    }
}

function moveToQuestions() {
    startBtn.remove();
    quizStart.remove();
    startPageHeader.remove();

    var questionContainerEl = document.getElementById("question-container-id");
    var listOfAnswers = document.createElement('ol');
    var questionText = document.createElement('p');
    
    if (xQuestion === questionAnswerObjArr.length){
        questionAnswerObjArr.answers = ["done"];
     return endQuiz();
    }

    // loops through the the questionsAnswerObjArr and returns each question/answer object as dynamically created p for question and buttons in list for answers
    for (i = 0; i < questionAnswerObjArr[xQuestion].answers.length; i++) {

        answerBtn = document.createElement('button');
        answerBtn.textContent = questionAnswerObjArr[xQuestion].answers[i];
        answerBtn.addEventListener('click', handleSelectedAnswer);
       
        questionText.textContent = questionAnswerObjArr[xQuestion].question;
        currentQuestion = questionText;
        currentAnswers = listOfAnswers;
       
        listOfAnswers.append(answerBtn);
        questionContainerEl.append(questionText);
        questionContainerEl.append(listOfAnswers); 
    }
}

// moves to the next question/answer object when a selection is made
function handleSelectedAnswer() {
    if (this.innerHTML == questionAnswerObjArr[xQuestion].answer) {
        answerResult.textContent = 'Correct!'
        
        score = (score + scoreInt)
        scoreEl.innerHTML = (score + "%")
        // console.log(score)

     } else {
        timeOnClock -=10;
        if (timeOnClock < 0){
            timeOnClock = 0;
        }
        answerResult.textContent = ('Incorrect: The correct answer is ' + questionAnswerObjArr[xQuestion].answer)
     }
    currentAnswers.remove();
    currentQuestion.remove();
    xQuestion++
    moveToQuestions();
    
}
      

startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', moveToQuestions);

