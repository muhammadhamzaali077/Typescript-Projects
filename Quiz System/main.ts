import chalk from "chalk";
import inquirer from "inquirer";

let usrName = await inquirer.prompt({
  type: "input",
  name: "userName",
  message: "Enter your name: ",
});

if (usrName.userName) {
  let score = 0;
  // Question No 1
  let ques1 = chalk.bold.blue("Q1. What is TypeScript?");
  console.log(ques1);

  let ans1 = await inquirer.prompt({
    type: "list",
    name: "answer1",
    message: "Select your answer",
    choices: [
      "A. A superset of JavaScript",
      "B. A new programming language",
      "C. A type of database",
      "D. An operating system",
    ],
  });
  if (ans1.answer1 === "A. A superset of JavaScript") {
    console.log(chalk.bold.green("Correct Answer\n"));
    score += 1;
  } else {
    console.log(chalk.bold.red("Incorrect Answer\n"));
  }

  // Question No 2

  let ques2 = chalk.bold.blue(
    "Q2. Which tool is commonly used to transpile TypeScript to JavaScript?"
  );
  console.log(ques2);

  let ans2 = await inquirer.prompt({
    type: "list",
    name: "answer2",
    message: "Select your answer",
    choices: [
      "A. TSLint",
      "B. Babel",
      "C. TypeScript Compiler (tsc)",
      "D. Webpack",
    ],
  });
  if (ans2.answer2 === "C. TypeScript Compiler (tsc)") {
    console.log(chalk.bold.green("Correct Answer\n"));
    score += 1;
  } else {
    console.log(chalk.bold.red("Incorrect Answer\n"));
  }

  // Question No 3

  let ques3 = chalk.bold.blue(
    "Q3. Which keyword is used to declare variables in TypeScript?"
  );
  console.log(ques3);

  let ans3 = await inquirer.prompt({
    type: "list",
    name: "answer3",
    message: "Select your answer",
    choices: ["A. var", "B. let", "C. const", "D. All of the above"],
  });
  if (ans3.answer3 === "D. All of the above") {
    console.log(chalk.bold.green("Correct Answer\n"));
    score += 1;
  } else {
    console.log(chalk.bold.red("Incorrect Answer\n"));
  }

  // Question No 4 Hard Level

  let ques4 = chalk.bold.blue("Q4. What are conditional types in TypeScript?");
  console.log(ques4);

  let ans4 = await inquirer.prompt({
    type: "list",
    name: "answer4",
    message: "Select your answer",
    choices: [
      "A. Types that depend on unions or intersections and allow for the use of the extends keyword to conditionally choose types.",
      "B. Types that control the flow of execution based on certain conditions.",
      "C. Types used for defining conditions within switch-case statements in TypeScript.",
      "D. Types that manage asynchronous code execution based on conditions.",
    ],
  });
  if (
    ans4.answer4 ===
    "A. Types that depend on unions or intersections and allow for the use of the extends keyword to conditionally choose types."
  ) {
    console.log(chalk.bold.green("Correct Answer\n"));
    score += 1;
  } else {
    console.log(chalk.bold.red("Incorrect Answer\n"));
  }

  // Question No 5

  let ques5 = chalk.bold.blue(
    "Q5. What is the key difference between the interface and type in TypeScript?"
  );
  console.log(ques5);

  let ans5 = await inquirer.prompt({
    type: "list",
    name: "answer5",
    message: "Select your answer",
    choices: [
      "A. Interface can extend types and classes, while type can't.",
      "B. Type can extend types and classes, while interface can't.",
      "C. Both interface and type can be used interchangeably; there is no key difference.",
      "D. Type is used only for defining custom types, whereas interface is used for extending built-in types.",
    ],
  });
  if (
    ans5.answer5 ===
    "A. Interface can extend types and classes, while type can't."
  ) {
    console.log(chalk.bold.green("Correct Answer\n"));
    score += 1;
  } else {
    console.log(chalk.bold.red("Incorrect Answer\n"));
  }

  // Question No 6

  let ques6 = chalk.bold.blue(
    "What is the purpose of the never type in TypeScript?"
  );
  console.log(ques6);

  let ans6 = await inquirer.prompt({
    type: "list",
    name: "answer6",
    message: "Select your answer",
    choices: [
      "A. It signifies an infinite loop within TypeScript functions.",
      "B. It represents types that are never assigned or reached in code execution.",
      "C. It is used to declare variables that never change their value.",
      "D. It's a type that represents null or undefined values.",
    ],
  });
  if (
    ans6.answer6 ===
    "B. It represents types that are never assigned or reached in code execution."
  ) {
    console.log(chalk.bold.green("Correct Answer\n"));
    score += 1;
  } else {
    console.log(chalk.bold.red("Incorrect Answer\n"));
  }
  let result = score;

  if (result > 5) {
    console.log(
      `Excellent ${usrName.userName}, Your score is ${chalk.bold.italic.green(
        result
      )}`
    );
  } else if (result > 3 && score < 5) {
    console.log(
      `Good ${usrName.userName}, Your score is ${chalk.bold.italic.green(
        result
      )}`
    );
  } else {
    console.log(
      `Nice try ${usrName.userName}, Your score is ${chalk.bold.italic.red(
        result
      )}, Try Again`
    );
  }
}
