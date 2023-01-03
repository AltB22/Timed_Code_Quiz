let startBtn = document.getElementById("start-button");
let quizStart = document.getElementById('quiz-start');
let startPageHeader = document.getElementById('start-page-header');
let answerResult = document.getElementById('answer-result')
let answerBtn ;//answer buttons
let currentQuestion; //question p
let currentAnswers;
let xQuestion = 0;


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
]

let startTime = questionAnswerObjArr.length * 10; //amount of time to start
let timeEl = document.getElementById('time-id');//span to house ticking time
timeEl.textContent = startTime
let timeInt = "";//time interval (1 sec or 1000ms)

function startQuiz(){
    timeInt = setInterval(startClock,1000);

}
function startClock() {
    startTime--;
    timeEl.textContent = startTime;
    
    if(startTime <= 0) {
        endQuiz();
    }
}

function endQuiz(){
   
    clearInterval(timeInt)
}


function moveToQuestions() {
    startBtn.remove();
    quizStart.remove();
    startPageHeader.remove();

    var questionContainerEl = document.getElementById("question-container-id");
    var listOfAnswers = document.createElement('ol');
    var questionText = document.createElement('p'); 
    
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
    console.log(questionAnswerObjArr[xQuestion].answer)
    if (this.innerHTML == questionAnswerObjArr[xQuestion].answer) {
        answerResult.textContent = 'Correct!'
     } else {
        answerResult.textContent = ('Incorrect: The correct answer is ' + questionAnswerObjArr[xQuestion].answer)
     }
    currentAnswers.remove();
    currentQuestion.remove();
    xQuestion++
    moveToQuestions();
    
    }
      

startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', moveToQuestions);

