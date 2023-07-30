const questoes = [
  {
    questao: "Qual é a capital do Brazil?",
    resposta: "brasília"
  },
  {
    questao: "Quem pintou a monalisa?",
    resposta: "leonardo da vince"
  }
];

let perguntas = 0;
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const submitButton = document.getElementById("submit-btn");
const resetButton = document.getElementById("reset-btn");
const resultElement = document.getElementById("result");

function showQuestion() {
  if (perguntas >= questoes.length) {
    questionElement.textContent = "Fim do Quiz. Parabéns!";
    answerElement.style.display = "none";
    submitButton.style.display = "none";
    return;
  }
  const perguntasCorretaObj = questoes[perguntas];
  questionElement.textContent = perguntasCorretaObj.questao;
}

function checkAnswer() {
  const respostaUsuario = answerElement.value.toLowerCase();

  const respostaCorretaObj = questoes[perguntas];
  const respostaCorreta = respostaCorretaObj.resposta;

  return respostaUsuario === respostaCorreta;
}

function nextQuestion() {
  if (perguntas >= questoes.length - 1) {
    showQuestion();
    answerElement.value = "";
    return;
  }
  perguntas++;

  showQuestion();

  answerElement.value = "";
  resultElement.textContent = "";
}

function resetQuiz() {
  perguntas = 0;
  showQuestion();
  answerElement.value = "";
  resultElement.textContent = "";
  answerElement.style.display = "block";
  submitButton.style.display = "block";
}

// Event Listener para o botão "Responder"
submitButton.addEventListener("click", () => {
  const respostaCorreta = checkAnswer();

  if (respostaCorreta) {
    resultElement.textContent = "Resposta correta! Parabéns!";
    nextQuestion();
  } else {
    resultElement.textContent = "Resposta incorreta. Tente novamente!";
  }

  if (perguntas >= questoes.length - 1) {
    questionElement.textContent = "Fim do Quiz. Parabéns!";
    answerElement.style.display = "none"; // Oculta o campo de resposta
    submitButton.style.display = "none";
  }
});

resetButton.addEventListener("click", resetQuiz);

// Inicialize o Quiz exibindo a primeira pergunta
showQuestion();
