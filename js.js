// number of questions in the quiz, this must be set exactly
var totalQuestions = 5;

// arrays to store answers, and user submited answers.
var answers = new Array;
var userAnswers = new Array;

// quiz answers
answers[1] = "B";
answers[2] = "A";
answers[3] = "C";
answers[4] = "B";
answers[5] = "D";

// sets the users answer selection to the appropriate array element
// in the userAnswers array.
// questionNumber is the question div id as well as the userAnswers
// array element index to store the answer in.
// answerSelection is the value of the selected answer from a question
function SetAnswer(questionNumber, answerSelection) {
    userAnswers[questionNumber] = answerSelection;
}

// applies the .wrong class styling to any question div that is incorrect
function MarkIncorrectQuestions() {
    for(i = 1; i <= totalQuestions; i++) {
        if(answers[i] != userAnswers[i]) {
            document.getElementById(i).className += " wrong";
        }
    }
}

// counts the number of correct answers
// returns the number of correct answers
function GetScore() {
    var score = 0;
    for(i = 1; i <= totalQuestions; i++) {
        if(userAnswers[i] == answers[i])
            score++;
    }
    return score;
}

// sets classes for each question div to its default styling.
function ApplyDefaultQuestionStyles() {
    for(i = 1; i <= totalQuestions; i++) {
        if(i % 2 == 0) {
            document.getElementById(i).className = "question";
        }
        else {
            document.getElementById(i).className = "question odd";
        }
    }
}

// calls all appropriate functions in order to check answers and mark
// incorrect questions.
function CheckQuiz() {
    ApplyDefaultQuestionStyles();
    var totalQuestions = '5';
    var score = GetScore();
    MarkIncorrectQuestions();
    alert("You scored: " + score + " out of " + totalQuestions + ".");
    //document.write("<h1>hello</h1>");
}

function result(score,totalQuestions){
      document.write("Score" +score);
    }