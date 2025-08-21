"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_readline_1 = __importDefault(require("node:readline"));
const rl = node_readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let questions = {
    question: [
        "Vad heter Sveriges huvudstad?",
        "Hur många miljoner bor i Sverige?",
        "Vad heter Norges huvudstad?",
    ],
    answer: ["Stockholm", "10", "Oslo"],
};
function ask(rl, prompt) {
    return new Promise((resolve) => rl.question(prompt + " ", resolve));
}
async function main() {
    let correctAnswers = 0;
    for (let i = 0; i < questions.question.length; i++) {
        const userAnswer = await ask(rl, questions.question[i]);
        if (userAnswer.toLowerCase() === questions.answer[i].toLowerCase()) {
            console.log("Rätt svar!");
            correctAnswers += 2;
        }
        else {
            console.log("Fel svar! Rätt svar är: " + questions.answer[i]);
            correctAnswers -= 1;
        }
    }
    const totalPossiblePoints = questions.question.length * 2;
    console.log(`Du fick ${correctAnswers} poäng av ${totalPossiblePoints} poäng!`);
    rl.close();
}
main();
