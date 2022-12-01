import readlineSync from 'readline-sync';

function getName() {
  let name = '';
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
export default getName;
