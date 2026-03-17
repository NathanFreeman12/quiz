console.log("script.js connected!");

const answers = {};
const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("selected");
      });

      button.classList.add("selected");

      const question = button.dataset.question;
      const answer = button.dataset.answer;

      answers[question] = answer;

      console.log(answers);
    });
  });
});

function displayResult() {
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");

  if (Object.keys(answers).length < 4) {
    resultContainer.style.display = "block";
    resultText.textContent = "Please answer all questions first.";
    return;
  }

  let scores = {
    attacker: 0,
    support: 0,
    strategist: 0
  };

  for (let question in answers) {
    scores[answers[question]]++;
  }

  let result = "";

  if (
    scores.attacker >= scores.support &&
    scores.attacker >= scores.strategist
  ) {
    result = "You are the Attacker! You are bold, confident, and love action.";
  } else if (
    scores.support >= scores.attacker &&
    scores.support >= scores.strategist
  ) {
    result = "You are the Support! You are reliable, helpful, and a great teammate.";
  } else {
    result = "You are the Strategist! You are smart, calm, and always thinking ahead.";
  }

  resultContainer.style.display = "block";
  resultText.textContent = result;
}

document.getElementById("show-result").addEventListener("click", displayResult);