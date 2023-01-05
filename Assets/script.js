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
let mainContent = document.querySelector('.content-container')
let contentEl = document.querySelector(".content") //class of content for the major content section elements
let startBtn = document.getElementById("start-button"); //start quiz button
let quizStart = document.getElementById('quiz-start'); //p element for quiz start prompt
let quizHomeEl = document.querySelector('.quiz-home') //div housing all child elements of quiz home class
let startPageHeader = document.getElementById('start-page-header');//h1 starting header
let answerResult = document.getElementById('answer-result')//section displaying feedback on answer to previous question.
let answerBtn ; //answer button elements
let currentQuestion; // p element housing each question text
let currentAnswers; //global variable to house the current list of answer options
let xQuestion = 0; //starting question is first index of the questionAnswerObjArr (I had to do this to give it starting value otherwise)
let timeOnClock; //time remaining on clock (x)
timeOnClock = 60 //amount of time to start
let timeEl = document.getElementById('time-id');//span to house ticking time
timeEl.textContent = timeOnClock; //
let timeInt = ""; //time interval (1 sec or 1000ms)
let score = 0; //starting score
let scoreEl = document.querySelector('.user-score-class');//span element to house score
scoreEl.textContent = score + "%"; //score to be displayed
let scoreInt = 20; //Amount added to score for each correct answer
let quizEnd = document.querySelector('.quiz-end'); //div class of "quiz-end"
quizEnd.remove();//Removes quiz by default until called in endQuiz function
let userScoreEl = document.getElementById('high-scores');
userScoreEl.remove(); //Removes userScoreEl by default until called in saveScore => loop function
let scoresPage = document.querySelector(".scores-page"); //div with clas scores-page
// let userScores = document.querySelector("#user-score-id"); deprecated
let quizHome = document.createElement('button'); //button to refresh quiz at end
quizHome.textContent = 'Home'; //text content of quizHome

//Array of objects containgin questions and their respective answers
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
]
//sets clock interval to 1 sec
function startQuiz(){
    timeInt = setInterval(startClock,1000);
}

//starts the clock ticking down and displays.  If time at or less than zero (due to incorrect penalty) then stop function and move to endQuiz
function startClock() {
    
    timeOnClock--;
    timeEl.textContent = timeOnClock;
    
    if(timeOnClock <= 0) {
        return endQuiz();
    }
}

//stops the clock, removes currentAnswer and current question. Displays quizEnd element and adds event listener to submit button
function endQuiz(){
        clearInterval(timeInt);
        currentAnswers.remove();
        currentQuestion.remove();
    
        contentEl.append(quizEnd);
       
        let submitScore = document.querySelector(".submit-button");
        submitScore.addEventListener('click', saveScore);
}

//if saveScore is true then grab the value of the input form and set to local storage with initials as key and score as value.
function saveScore(event) {
    event.preventDefault();
    
    let saveScore = document.querySelector(".submit-button");
   
    if (saveScore) {
    
        var key = document.querySelector('#initials').value;
        localStorage.setItem(key,score)

        //shows "High Scores: Heading"
        var HighScoreText = document.createElement('h2');
        HighScoreText.textContent = 'High Scores:'
        scoresPage.append(HighScoreText);

        //Loops through each key and creates elements for each score then appends in sequence and removes previous content
        Object.keys(localStorage).forEach((key) => {
            var highScoresList = document.createElement('ol');

            var insertBreak = document.createElement('br');
            highScoresList.setAttribute('id',key);
            highScoresList.setAttribute('class','score-list');
        
            var savedScoreList = document.createElement('li');
            savedScoreList.setAttribute('id','score-list');
            savedScoreList = JSON.parse(localStorage.getItem(key));

            var userScoreId = document.createElement('span');
            userScoreId.setAttribute('id','user-score-id')

            highScoresList.append(savedScoreList);
            scoresPage.append(userScoreEl);
            userScoreEl.append(userScoreId,insertBreak);

            quizEnd.remove();
            answerResult.remove();
            //text to be displayed in list of scores
            userScoreId.textContent = key + " " + score + "%";
        })
        scoresPage.append(quizHome);
    }
}
//Refreshes quiz using Home button at end
function refreshQuiz() {
   location.reload();
    }


//removes quiz home features and creates list of answers with text
function moveToQuestions() {
    startBtn.remove();
    quizStart.remove();
    startPageHeader.remove();

    var questionContainerEl = document.getElementById("question-container-id");
    var listOfAnswers = document.createElement('ol');
    var questionText = document.createElement('p');

    //if current question index postion is equal in type and value to the length of the questions array then stop function and move to end quiz
    if (xQuestion === questionAnswerObjArr.length){
        questionAnswerObjArr.answers = ["done"];//I had to do this otherwise null error
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

// moves to the next question/answer object when a selection is made and deducts 10 seconds from clock for each incorrect answers.  Renders text content feedback on selected answers.
function handleSelectedAnswer() {
    if (this.innerHTML == questionAnswerObjArr[xQuestion].answer) {
        answerResult.textContent = 'Correct!'
        
        score = (score + scoreInt)
        scoreEl.innerHTML = (score + "%")

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
//buttons to call functions
quizHome.addEventListener('click',refreshQuiz);
startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', moveToQuestions);

