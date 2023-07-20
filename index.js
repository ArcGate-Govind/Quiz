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
console.log(answers);
const Qussss = document.getElementById("question");
const firstAns = document.getElementById("firstAns");
const secondAns = document.getElementById("secondAns");
const thridAns = document.getElementById("thridAns");
const fourAns = document.getElementById("fourAns");
const button = document.getElementById("submit");
const user = document.getElementById("user");
user.innerText = localStorage.getItem("username");
const previousButton = document.getElementById("prev");
previousButton.addEventListener("click", () => {
  currentQus--;
  score--;
  localStorage.setItem("currentQus", currentQus);
  document.getElementById("currentQusno").innerHTML =
    Number(localStorage.getItem("currentQus")) + 1;
  //answer === Qusestion[currentQus].correct

  if (currentQus >= 0) {
    setCheck();
    if (localStorage.getItem("answer" + currentQus)) {
      switch (localStorage.getItem("answer" + currentQus)) {
        case "a":
          answers[0].checked = true;
          break;
        case "b":
          answers[1].checked = true;
          break;
        case "c":
          answers[2].checked = true;
          break;
        case "d":
          answers[3].checked = true;
          break;
      }
    }
    // answers.forEach((ckeckBox) => {
    //   if(ckeckBox.id == localStorage.getItem('answer'+currentQus))
    //  return answers.checked = true;
    // });

    //answers[currentQus].checked = true;
  } else {
    currentQus = 0;
  }
});

let currentQus = 0;
if (localStorage.getItem("currentQus") != undefined) {
  document.getElementById("currentQusno").innerHTML =
    Number(localStorage.getItem("currentQus")) + 1;
  currentQus = localStorage.getItem("currentQus");
} else {
  document.getElementById("currentQusno").innerHTML = 1;
}
let score = 0;
if (localStorage.getItem("score") != undefined) {
  score = localStorage.getItem("score");
}
setCheck();
function setCheck() {
  CheckRadio();
  const currentQuizData = Qusestion[currentQus];
  Qussss.innerText = currentQuizData.question;
  firstAns.innerText = currentQuizData.a;
  secondAns.innerText = currentQuizData.b;
  thridAns.innerText = currentQuizData.c;
  fourAns.innerText = currentQuizData.d;
}

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
// shuffleArray(Qusestion);

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
  console.log(answer,"nn");
  if (answer) {
    localStorage.setItem("answer" + currentQus, answer);
    if (answer === Qusestion[currentQus].correct) {
      score++;
      localStorage.setItem("score", score);
    }
    currentQus++;

    if (currentQus < Qusestion.length) {
      localStorage.setItem("currentQus", currentQus);
      console.log(currentQus,"bb");
      document.getElementById("currentQusno").innerHTML =
        Number(localStorage.getItem("currentQus")) + 1;
      setCheck();
      if (localStorage.getItem("answer" + currentQus)) {
        switch (localStorage.getItem("answer" + currentQus)) {
          case "a":
            answers[0].checked = true;
            break;
          case "b":
            answers[1].checked = true;
            break;
          case "c":
            answers[2].checked = true;
            break;
          case "d":
            answers[3].checked = true;
            break;
        }
      }
    } else {
      quiz.innerHTML = `
           <h2>Your answered ${score}/${Qusestion.length} questions correctly</h2>
           <button  class="main-button button" onclick="reloadPage()">Reload</button>
           `;
           localStorage.setItem("lastscore",score)
           let string = JSON.stringify(score)
           localStorage.setItem("socreall", string,"username","email")
          
    }
  }
});
function reloadPage() {
  answers.forEach((ans, index) => {
    localStorage.removeItem("answer" + index);
  });
  localStorage.removeItem("currentQus");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("score");
  location.reload();
}
const modal = document.getElementById("myModal");
const form = document.getElementById("myForm");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");

function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

function validateUsername(username) {
  const regex = /^[a-zA-Z0-9_]{3,16}$/;
  return regex.test(username);
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function handleSubmit(event) {
  event.preventDefault();

  usernameError.textContent = "";
  emailError.textContent = "";

  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const username = usernameInput.value;
  const email = emailInput.value;

  if (!validateUsername(username)) {
    usernameError.textContent = "Invalid username";
    return;
  }

  if (!validateEmail(email)) {
    emailError.textContent = "Invalid email";
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  hideModal();
}

form.addEventListener("submit", handleSubmit);
if (localStorage.getItem("username") == undefined) {
  showModal();
}

if (localStorage.getItem("answer" + currentQus)) {
  switch (localStorage.getItem("answer" + currentQus)) {
    case "a":
      answers[0].checked = true;
      break;
    case "b":
      answers[1].checked = true;
      break;
    case "c":
      answers[2].checked = true;
      break;
    case "d":
      answers[3].checked = true;
      break;
  }
}
