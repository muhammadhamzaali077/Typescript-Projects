#!/usr/bin/env node

import inquirer from "inquirer";

interface anstype {
  userID: string;
  userPIN: number;
  accountType: string;
  transType: string;
  amount: number;
}
type user = {
  userID: string;
  userPIN: number;
};

let users: user[] = [
  {
    userID: "hamza",
    userPIN: 1234,
  },
  {
    userID: "ali",
    userPIN: 5678,
  },
];
let balance: number = Math.floor(Math.random() * 100000);
let answer1: anstype;
let answer2: anstype;

startLoop();

async function startLoop() {
  await getUserID();
  do {
    await getTransaction();
    var again = await inquirer.prompt([
      {
        type: "list",
        name: "restart",
        choices: ["yes", "no"],
        message: "Do you want to continue:",
      },
    ]);
  } while (again.restart == "yes");
}

async function getUserID() {
  answer1 = await inquirer.prompt([
    {
      type: "input",
      name: "userID",
      message: "Please enter your user ID:",
    },
    {
      type: "number",
      name: "userPIN",
      message: "Please enter your user PIN:",
    },
  ]);
  await checkUserID(answer1.userID, answer1.userPIN);
}

async function checkUserID(userID: string, userPIN: number) {
  let condition = false;
  for (let i = 0; i < users.length; i++) {
    if (userID === users[i].userID && userPIN === users[i].userPIN) {
      condition = true;
      
      
      break;
    }
    // console.log(userID===users[i].userID);
    // console.log(userPIN=== users[i].userPIN);
    
  }
  
  if (!condition) {
    console.log("Invalid user ID or PIN, Try again.");
    await getUserID();
  }
}

async function getTransaction() {
  answer2 = await inquirer.prompt([
    {
      type: "list",
      name: "accountType",
      choices: ["Current", "Saving"],
      messge: "Please slect account type:",
    },
    {
      type: "list",
      name: "transType",
      choices: ["Fast Cash", "Withdraw"],
      messge: "Please slect Transaction type:",
    },
    {
      type: "list",
      name: "amount",
      choices: [1000, 3000, 5000, 10000, 15000, 20000],
      messge: `Please slect your amount (current balance is ${balance});`,
      when(answer2) {
        return answer2.transType == "Fast Cash";
      },
    },
    {
      type: "number",
      name: "amount",
      messge: `Please slect your amount (current balance is ${balance});`,
      when(answer2) {
        return answer2.transType == "Withdraw";
      },
    },
  ]);

  if (answer1.userID && answer1.userPIN) {
    if (answer2.amount <= balance) {
      balance -= answer2.amount;
      console.log(`Your current balance is ${balance}`);
    } else {
      console.log(`Insuficient balance ${balance}`);
    }
  }
}
