import readline from "node:readline";
import type { Interface } from "node:readline"; // Här importeras bara typer

const rl: Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Vad heter du? ", (answer) => {
//   console.log("Hej " + answer);
//   rl.close();
// });

// Fråga användaren och returnera svaret som Promise<string>

interface Question {
  question: Array<string>;
  answer: Array<string>;
}

let questions: Question = {
  question: [
    "Vad heter Sveriges huvudstad?",
    "Hur många miljoner bor i Sverige?",
    "Vad heter Norges huvudstad?",
  ],
  answer: ["Stockholm", "10", "Oslo"],
};

function ask(rl: readline.Interface, prompt: string): Promise<string> {
  return new Promise((resolve) => rl.question(prompt + " ", resolve));
}

async function main() {
  let correctAnswers = 0;
  for (let i = 0; i < questions.question.length; i++) {
    const userAnswer = await ask(rl, questions.question[i]);

    if (userAnswer.toLowerCase() === questions.answer[i].toLowerCase()) {
      console.log("Rätt svar!");
      correctAnswers += 2;
    } else {
      console.log("Fel svar! Rätt svar är: " + questions.answer[i]);
      correctAnswers -= 1;
    }
  }

  const totalPossiblePoints = questions.question.length * 2;
  console.log(
    `Du fick ${correctAnswers} poäng av ${totalPossiblePoints} poäng!`
  );

  rl.close();
}

main();
