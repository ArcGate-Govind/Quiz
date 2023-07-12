const Qusestion = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const quiz = document.getElementById("maincontainer1");
const answers = document.querySelectorAll(".answer");
console.log("answers", answers);
const Qussss = document.getElementById("question");
const firstAns = document.getElementById("firstAns");
const secondAns = document.getElementById("secondAns");
const thridAns = document.getElementById("thridAns");
const fourAns = document.getElementById("fourAns");
const button = document.getElementById("submit");

let currentQus = 0;
let score = 0;
setCheck();
function setCheck() {
    CheckRadio();
  const currentQuizData = Qusestion[currentQus];
  console.log(currentQuizData,"bbb");
  Qussss.innerText = currentQuizData.question;
  console.log(Qussss.innerText);
  firstAns.innerText = currentQuizData.a;
  secondAns.innerText = currentQuizData.b;
  thridAns.innerText = currentQuizData.c;
  fourAns.innerText = currentQuizData.d;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(Qusestion); 

function CheckRadio() {
  answers.forEach((answers) => (answers.checked = false));
}
function add() {
  let answer;
  answers.forEach((answers) => {
    if (answers.checked) {
      answer = answers.id;
      console.log(answer);
    }
  });
  return answer;
}
button.addEventListener("click", () => {
  const answer = add();
  if (answer) {
    if (answer === Qusestion[currentQus].correct) {
      score++;
    }
    currentQus++;

    if (currentQus < Qusestion.length) {
      setCheck();
    } else {
      quiz.innerHTML = `
           <h2>Your answered ${score}/${Qusestion.length} questions correctly</h2>
           <button  class="main-button button" onclick="location.reload()">Reload</button>
           `;
    }
  }
});

