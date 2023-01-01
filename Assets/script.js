// vars needed
// var startBtn = document.getElementById('#start-button');



$(function startQuiz(){
    $('#start-button').on('click', function(){

if ($('#start-button')){
    moveToQuestions();
    
}
});
});



let quizQuestions = [
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
    }
]

function moveToQuestions(){

for (let i = 0; i <= quizQuestions.length; i++) {
// console.log(quizQuestions.length)
let questionObj = [i];
if (questionObj[i] == quizQuestions.answer){
    console.log(quizQuestions);

}

}
// console.log(quizQuestions);
//need a loop through the the questions array that returns each question/answer object as dynamically created p for quesiton and buttons in list for answers. Then moves to the next question/answer object when a selection is made.


}

// console.log(moveToQuestions);
