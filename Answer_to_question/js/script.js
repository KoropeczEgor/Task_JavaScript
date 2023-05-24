"string mode";

document.addEventListener("DOMContentLoaded", () => {
  const answer__year = 2023;
  const answerYes = "Ответ правильный";
  const answerNou = "Ответ неправильный";

  const inputNode = document.querySelector(".input");
  const buttonNode = document.querySelector(".btn");
  const outputNode = document.querySelector(".output");

  buttonNode.addEventListener("click", function () {
    const inputValue = inputNode.value;

    if (!inputValue) {
      return;
    }

    const answer = Number(inputNode.value);
    let output = answerYes;

    if (answer !== answer__year) {
      output = answerNou;
    }

    outputNode.innerHTML = output;
  });
});
