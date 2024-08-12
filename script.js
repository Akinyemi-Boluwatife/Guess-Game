// Author: Akinyemi Boluwatife Oluwasegun
// linkedin: https://www.linkedin.com/in/boluwatife-akinyemi-230b9828a
// Logic for the code
"use strict";
document.querySelector(".again-btn");
document.querySelector(".message");
document.querySelector(".reveal");
// let guess = Number(document.querySelector(".input-number").value);
document.querySelector(".check");
document.querySelector(".score");
document.querySelector(".highscore");
let randomNumber = Math.trunc(Math.random() * 30 + 1);
let score = 20;
let highscore = 0;

//code for it
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input-number").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "❌No number";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "🎉You win";
    document.querySelector(".reveal").textContent = randomNumber;
    document.querySelector(".score").textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      if (guess > randomNumber) {
        document.querySelector(".message").textContent = "Too high";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        //too low
        document.querySelector(".message").textContent = "Too low";
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      //when score is less than 1
      document.querySelector(".message").textContent = "❌You've Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again-btn").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".input-number").value = "";
  randomNumber = Math.trunc(Math.random() * 30 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".reveal").textContent = "?";
});
