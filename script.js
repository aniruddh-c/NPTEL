let currentQuestions = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function shuffleOptions(question) {
  let options = question.options.map((opt, index) => ({
    text: opt,
    isCorrect: index === question.correct
  }));

  options = shuffle(options);

  return {
    ...question,
    options: options.map(o => o.text),
    correct: options.findIndex(o => o.isCorrect)
  };
}

function startTest(mode) {
  let filtered = mode === "all"
    ? questions
    : questions.filter(q => q.test == mode);

  currentQuestions = shuffle(filtered).map(q => shuffleOptions(q));

  renderQuiz();

  history.pushState({ quiz: true }, "", "#quiz");

  window.onpopstate = function () {
  document.getElementById("quiz").innerHTML = "";
};
}

function renderQuiz() {
  const container = document.getElementById("quiz");
  container.innerHTML = "";

  currentQuestions.forEach((q, index) => {
    let div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `
      <p><b>${index + 1}. ${q.question}</b></p>
      ${q.options.map((opt, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}">
          ${opt}
        </label>
      `).join("")}
    `;

    container.appendChild(div);
  });

  /* ✅ Submit button appears AFTER questions */
  let submitDiv = document.createElement("div");
  submitDiv.className = "submit-box";

  submitDiv.innerHTML = `
    <button onclick="submitQuiz()">Submit</button>
    <p id="score"></p>
  `;

  container.appendChild(submitDiv);

  submitDiv.innerHTML = `
  <button onclick="submitQuiz()">Submit</button>
  <button onclick="startTest('all')" style="margin-left:10px;">Retry</button>
  <p id="score"></p>
`;
}

function submitQuiz() {
  let score = 0;

  currentQuestions.forEach((q, index) => {
    let selected = document.querySelector(`input[name="q${index}"]:checked`);
    let options = document.getElementsByName(`q${index}`);

    options.forEach((opt, i) => {
      let label = opt.parentElement;

      if (i === q.correct) {
        label.classList.add("correct");
      }

      if (opt.checked && i !== q.correct) {
        label.classList.add("wrong");
      }
    });

    if (selected && parseInt(selected.value) === q.correct) {
      score++;
    }
  });

  document.getElementById("score").innerText =
    `Score: ${score} / ${currentQuestions.length}`;

    document.querySelectorAll("input[type=radio]").forEach(el => {
    el.disabled = true;
    })

    document.getElementById("score").scrollIntoView({ behavior: "smooth" });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

window.addEventListener("load", () => {
  history.replaceState({}, "", "");
});

window.onpopstate = function () {
  if (confirm("Exit test? Your progress will be lost.")) {
    document.getElementById("quiz").innerHTML = "";
  } else {
    history.pushState({ quiz: true }, "", "#quiz");
  }
};

