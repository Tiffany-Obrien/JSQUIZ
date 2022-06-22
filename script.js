var startbutton = document.getElementById("startbutton");
//buttons
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");

var questionsEl = document.getElementById("questions");
//Quiz questions:
Var myQuestions =[
{
Question: "Which HTML element do we insert Javascript?"
 answers: {  
   a: The div tag 
   b: the id tag
   c:  the script tag
},
    CorrectAnswer: "c"
},
{
Question: What does DOM stand for?
answers: {
  a:  Document Orbital Manual
  b:  Document Object Model
  c:  Doc Overt Maintenance 
},
    Correctanswer: "b"
},
{
Question: What is the default name for a home page?
  answers: {
   a: index.html
   b: index.js
   c: script.js
  }
    correctAnswer: "a"
}
{
Question: Which variable has a true/false value?
 answers: {
   a: String
   b: Boolean
   c: Array
 }
    correctAnswer: "b"
}
];


</div>

//event listener to start quiz
startbutton.addEventListener('click', startbutton);