import readlineSync from 'readline-sync';

function getName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
export default getName;
