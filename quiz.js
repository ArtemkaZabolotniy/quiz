import questions from './localStorage.js'
let rigthQuestions = 0;
let select = document.getElementById('fruits');
let currentAnswer = '';
let isAnswered = false;
// let select = document.getElementById('fruits').options 
// масив всіх значень option в select;
function onLoad() {
  let theQuizNum = Math.floor(Math.random() * 5);
  document.getElementById('question').textContent = questions[theQuizNum].question;
  document.getElementById('category').textContent = questions[theQuizNum].category;
  document.getElementById('count').textContent = rigthQuestions;
  let answers = questions[theQuizNum].choices;
  currentAnswer = questions[theQuizNum].answer;
  let selectOptions = select.options;
  for(let i = 0; i < 3 ; i++) {
    selectOptions[i].value = answers[i];
    selectOptions[i].text = answers[i];
  }
  return answers
}
window.onload = onLoad;

function check() {
  let chosen = select.value;
  isAnswered = true;
  if (chosen == currentAnswer) {
    document.getElementById('checkedAnswer').textContent = " Правильно!";
    rigthQuestions++;
    onLoad();
  } else {
    document.getElementById('checkedAnswer').textContent = " Nuh uh ;(";
    rigthQuestions--;
    onLoad();
  }
}
window.onload = () => {
    onLoad();
    document.getElementById('checkButton').addEventListener('click', check);
};