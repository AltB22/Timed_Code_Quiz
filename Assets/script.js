let xQuestion = 0;
let startBtn = document.getElementById("start-button");
let quizStart = document.getElementById('quiz-start');
let startPageHeader = document.getElementById('start-page-header');
var advanceQuestion;
// let answerBtn = $('.answer-buttons');
// let question = $('.question');
// answerBtn.val = false;


function startQuiz() {
        if (startBtn) {
            moveToQuestions();
        }};

startBtn.addEventListener('click', moveToQuestions);

var questionAnswerObjArr = [
    {
        question: 'String values must be enclosed within___________when being assigned to variables.',
        answers: [
            '1. Commas',
            '2. Curly Brackets',
            '3. Quotes',
            '4. Parentheses',],
        answer: 2,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            '1. JavaScript',
            '2. Terminal / Bash',
            '3. A For Loop',
            '4. Console.log()',],
        answer: 3,
    },
]

function moveToQuestions() {
    startBtn.remove();
    quizStart.remove();
    startPageHeader.remove();

    var questionContainerEl = document.getElementById("question-container-id");
   
    var listOfAnswers = document.createElement('ol');
    var questionText = document.createElement('p');


    //need a loop through the the questions array that returns each question/answer object as dynamically created p for quesiton and buttons in list for answers. Then moves to the next question/answer object when a selection is made.
    for (i = 0; i < questionAnswerObjArr[xQuestion].answers.length; i++) {
        advanceQuestion = document.createElement('button');
        advanceQuestion.textContent = questionAnswerObjArr[xQuestion].answers[i];
        questionText.textContent = questionAnswerObjArr[xQuestion].question;

        advanceQuestion.addEventListener('click', handleSelectedAnswer);
        
        listOfAnswers.append(questionText);
        listOfAnswers.append(advanceQuestion);
        questionContainerEl.append(questionText);
        questionContainerEl.append(listOfAnswers);
    }
}
function handleSelectedAnswer() {
    xQuestion++
    
    moveToQuestions();
}


  // for (let i = 0; i <= questionAnswerObjArr.length; i++) {
    // console.log(quizQuestionObj1.answers[2]);
    // let answers = [i];
    //Make the answer button .val equal to the answer
    // answerBtn.index[i] = quizQuestionObj1.answer[i];
    // console.log(answerBtn.index[i])
    //     $('.answer-feedback').textContent = 'Wrong';
    //     console.log(quizQuestionObj1.answer);
    //     console.log('Wrong!');
    // }
    // else {console.log('Right!');

    // }



