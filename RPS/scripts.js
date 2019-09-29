let options = ["rock", "paper", "scissors"];
let compPara = document.querySelector("#compChoice");

function outcome(clicked_id) {
  console.log("TCL: outcome -> clicked_id", clicked_id);
  let compChoice = options[Math.floor(Math.random() * 3)];
  console.log("TCL: outcome -> compChoice", compChoice);
  idName = clicked_id;
  compPara.textContent = `Computer chose: ${compChoice}`;

  if (idName == compChoice) {
    para.textContent = "It is a tie!";
  } else if (
    (idName == "rock" && compChoice == "scissors") ||
    (idName == "paper" && compChoice == "rock") ||
    (idName == "scissors" && compChoice == "paper")
  ) {
    para.textContent = "You win!";
  } else {
    para.textContent = "The computer wins!";
  }
}
