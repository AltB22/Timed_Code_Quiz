// vars needed
// var startBtn = document.getElementById('#start-button');

let firstQuestion = 0;
let startBtn =  $('#start-button');
let quizStart =  $('#quiz-start');
let startPageHeader = $('.start-page-header');
let answerBtn = $('.answer-buttons');
// answerBtn.val = false;

$(function startQuiz(){
    $('#start-button').on('click', function(){

if ($('#start-button')){
    moveToQuestions();
    
}
});
});


var questionAnswerObjArr = [
    quizQuestionObj1 = 
    {
        question: 'String values must be enclosed within___________when being assigned to variables.',
        answers: [
            '1. Commas',
            '2. Curly Brackets',
            '3. Quotes',
            '4. Parentheses',],
            answer: 2,
    },

    quizQuestionObj2 = 
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

function moveToQuestions(){
    startBtn.remove();
    quizStart.remove();
    startPageHeader.remove();

for (let i = 0; i <= questionAnswerObjArr.length; i++) {
console.log(quizQuestionObj1.answers[2]);
// let answers = [i];
//Make the answer button .val equal to the answer
if (answerBtn.index[i] == quizQuestionObj1.answer[i]){
    $('.answer-feedback').textContent = 'Wrong';
    console.log(quizQuestionObj1.answer);
    console.log('Wrong!');
}
else {console.log('Right!');

}

}

}
// console.log(quizQuestions);
//need a loop through the the questions array that returns each question/answer object as dynamically created p for quesiton and buttons in list for answers. Then moves to the next question/answer object when a selection is made.



// console.log(moveToQuestions);
