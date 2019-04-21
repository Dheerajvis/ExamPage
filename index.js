const studentName = document.getElementById('studentName');
const question = document.getElementById('question');
const qi = document.getElementById('qi');
const ul = document.getElementById('ul');
const optA = document.getElementById('optA');
const optB = document.getElementById('optB');
const optC = document.getElementById('optC');
const optD = document.getElementById('optD');
const submit = document.getElementById('submitBtn');
const skip = document.getElementById('skipBtn');
const progress = document.getElementById('progress');
const progressTab = document.getElementById('progressTab');
const checkA = document.getElementById('A');
const checkB = document.getElementById('B');
const checkC = document.getElementById('C');
const checkD = document.getElementById('D');
var inputTags = document.getElementsByName('ans_selection[]');
const totalScore = document.getElementById('totalScore');

var questions = [
  {
    questions: '01. What is your question?',
    optionA: 'Wrong',
    optionB: 'Wrong',
    optionC: 'Correct',
    optionD: 'Wrong',
    correct: 'C'
  },
  {
    questions: '02. This is your question Number 2?',
    optionA: 'Wrong',
    optionB: 'Correct',
    optionC: 'Wrong',
    optionD: 'Wrong',
    correct: 'B'
  },
  {
    questions: '03. This is your question Number 3?',
    optionA: 'Wrong',
    optionB: 'Wrong',
    optionC: 'Wrong',
    optionD: 'Correct',
    correct: 'D'
  }
];

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let score = 0;
let count = -1;

renderQuestion();
progressRender();

function renderQuestion() {
  q = questions[runningQuestionIndex];
  question.innerText = q.questions;
  optA.innerText = q.optionA;
  optB.innerText = q.optionB;
  optC.innerText = q.optionC;
  optD.innerText = q.optionD;
}

//progress render
function progressRender() {
  for (i = 1; i <= questions.length; i++) {
    progressTab.innerHTML += '<div id="' + i + '" class="box">' + i + '</div>';
  }
}
//Questions that done changed there style
function qDone() {
  document.getElementById([runningQuestionIndex]).className = 'boxDone';
}

//print total score
function printScore() {
  totalScore.style.display = 'inline-block';
  let scoreHere = document.getElementById('scoreHere');
  scoreHere.innerText = 'Total Score ' + questions.length + ' / ' + score;
}

//options A checking
function checkOptA() {
  count++;
  console.log(count);
  if (checkA.checked && checkA.id == questions[count].correct) {
    score++;
    checkA.checked = false;
    console.log('Correct ans');
  } else {
    checkA.checked = false;
    runningQuestionIndex + 1;
    console.log('Wrong ans');
  }
}

//options B checking
function checkOptB() {
  count++;
  console.log(count);
  if (checkB.checked && checkB.id == questions[count].correct) {
    score++;
    checkB.checked = false;
    console.log('Correct ans');
  } else {
    checkB.checked = false;
    runningQuestionIndex + 1;
    console.log('Wrong ans');
  }
}

//options C checking
function checkOptC() {
  count++;
  console.log(count);
  if (checkC.checked && checkC.id == questions[count].correct) {
    score++;
    checkC.checked = false;
    console.log('Correct ans');
  } else {
    checkC.checked = false;
    runningQuestionIndex + 1;
    console.log('Wrong ans');
  }
}

//options D checking
function checkOptD() {
  count++;
  console.log(count);
  if (checkD.checked && checkD.id == questions[count].correct) {
    score++;
    checkD.checked = false;
    console.log('Correct ans');
  } else {
    checkD.checked = false;
    runningQuestionIndex + 1;
    console.log('Wrong ans');
  }
}

//Submit button function
function submitQue() {
  if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    renderQuestion();
    qDone();
    if (checkA.checked) {
      checkOptA();
    } else if (checkB.checked) {
      checkOptB();
    } else if (checkC.checked) {
      checkOptC();
    } else if (checkD.checked) {
      checkOptD();
    }
  } else {
    printScore();
  }
}

//skip button function
function skipQue() {
  runningQuestionIndex++;
  if (runningQuestionIndex <= lastQuestionIndex) {
    renderQuestion();
    qDone();
    // console.log(runningQuestionIndex);
  } else {
    printScore();
  }
}

skip.addEventListener('click', skipQue);
submit.addEventListener('click', submitQue);
//restriction on checkbox
function KeepCount() {
  var total = 0;

  for (var i = 0; i < inputTags.length; i++) {
    if (inputTags[i].checked) {
      total = total + 1;
    }

    if (total > 1) {
      // alert('Pick Just One Please');
      inputTags[i].checked = false;
      return false;
    }
  }
}
