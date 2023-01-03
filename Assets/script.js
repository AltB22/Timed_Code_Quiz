let startBtn = document.getElementById("start-button");
let quizStart = document.getElementById('quiz-start');
let startPageHeader = document.getElementById('start-page-header');
let answerResult = document.getElementById('answer-result')
let answerBtn ;//answer buttons
let currentQuestion; //question p
let currentAnswers;
let xQuestion = 0;
let selectedAnswer = [];
var timeOnClock;

let questionAnswerObjArr = [
    {
        question: 'String values must be enclosed within___________when being assigned to variables.',
        answers: [
            '1. Commas',
            '2. Curly Brackets',
            '3. Quotes',
            '4. Parentheses',],
        answer: '3. Quotes',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            '1. JavaScript',
            '2. Terminal / Bash',
            '3. A For Loop',
            '4. Console.log()',],
        answer: '4. Console.log()',
    },
]

function startQuiz() {
        if (startBtn) {
            moveToQuestions();
        }};

startBtn.addEventListener('click', moveToQuestions);





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
        // answerBtn.addEventListener('click', answerFeedback)
        listOfAnswers.append(answerBtn);
        questionContainerEl.append(questionText);
        questionContainerEl.append(listOfAnswers);

     
    }
   
}

// moves to the next question/answer object when a selection is made
function handleSelectedAnswer() {
    // console.log(this)
    if (this){
        console.log(this)
    if (this.innerHTML == questionAnswerObjArr[xQuestion].answer) {

        // selectedAnswer = [answerBtn]
        //  selectedAnswer.push(answerBtn)
         console.log('Correct')
     } else {
        console.log('Incorrect')
     }
    }
     currentAnswers.remove();
     currentQuestion.remove();
     xQuestion++
     moveToQuestions();
    //  answerFeedback();    
        
    
    
    }
      



       

   
   




    //    var answer = 
    // if (input == questionAnswerObjArr[xQuestion].answer) {
    //     console.log('correct')

        // var x = [answerBtn]
        // answerBtn.textContent = selectedAnswer
        
    // if (x == questionAnswerObjArr[xQuestion].answer) {
    
       
    // }
   
// };
// };
// console.log(typeof(answerBtn))
// function answerFeedback(){

  

    

// };



    // if (selectedAnswer == questionAnswerObjArr.answer){
        
        // console.log(selectedAnswer)
    // }
   
//     if (selectedAnswer == questionAnswerObjArr.answer){
//     console.log(questionAnswerObjArr[xQuestion].answer)
// }



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



