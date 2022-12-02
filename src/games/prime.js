const questions = Array.from({ length: 3 }, () => [Math.floor(Math.random() * 98 + 2)]);
const rightAnswers = [];
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
for (let i = 0; i < 3; i += 1) {
  for (let j = 2; j <= Math.sqrt(questions[i]); j += 1) {
    if (questions[i] % j === 0) {
      rightAnswers.push('no');
    }
  }
  rightAnswers.push('yes');
}
export { questions, rightAnswers, rules };
