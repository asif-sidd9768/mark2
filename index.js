const readLineSync = require('readline-sync')
const questions = require('./questions')
const chalk = require('chalk')

const user = {
  name: "",
  correct: 0,
  wrong: 0,
  total: 3
}

const welcome = () => {
  const name = readLineSync.question(chalk.bgBlack.bold.yellow("What is your name? "))
  user.name = name
  console.log("==========================")
  console.log(chalk.bgBlueBright.bold.blackBright(`Hola! Welcome, ${user.name}.`))
  console.log("==========================")
}

const checkAnswer = (index, answer) => {
  if (answer === questions[index].answer) {
    user.correct++;
  } else {
    user.wrong++;
  }
}

const game = () => {
  for (let i = 0; i < questions.length; i++) {
    const answer = readLineSync.keyInSelect(questions[i].options, chalk.bgWhite.bold.black(questions[i].text))
    checkAnswer(i, answer)
  }
}

const displayResult = () => {
  console.log("\n\nThank you for playing")
  console.log('===========XXXXX===========')
  console.log(chalk.bgGreen.bold(`Correct : ${user.correct}/${user.total}`))
  console.log(chalk.bgRed.bold(`Wrong : ${user.wrong}/${user.total}`))
  const perc = ((user.correct) / (user.total)) * 100
  console.log(chalk.bgYellow(`Percentage: ${perc.toFixed(2)}`))
}


welcome();
if (readLineSync.keyInYN("Do you want to begin? (Y or n)")) {
  game()
  displayResult()
} else {
  console.log(chalk.bgRed.bold.black("\nThanks! for doing nothing!"))
  console.log("=========The END=========")
}
