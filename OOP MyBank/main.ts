import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";

class Customer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  mobNumber: number;
  accNumber: number;

  constructor(
    fName: string,
    lName: string,
    age: number,
    gender: string,
    mob: number,
    acc: number
  ) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.gender = gender;
    this.mobNumber = mob;
    this.accNumber = acc;
  }
}

interface BankAccount {
  accNumber: number;
  balace: number;
}

class Bank {
  customer: Customer[] = [];
  account: BankAccount[] = [];

  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }
  addAccountNumber(obj: BankAccount) {
    this.account.push(obj);
  }
  transaction(accObj: BankAccount) {
    let newAccount = this.account.filter(
      (acc) => acc.accNumber !== accObj.accNumber
    );
    this.account = [...newAccount, accObj];
  }
}

let myBank = new Bank();
for (let i = 1; i <= 3; i++) {
  let fName = faker.person.firstName("male");
  let lName = faker.person.lastName();
  let num = parseInt(faker.phone.number("9231########"));

  const cus = new Customer(fName, lName, 22 * i, "Male", num, 100 + i);
  myBank.addCustomer(cus);
  myBank.addAccountNumber({ accNumber: cus.accNumber, balace: 1230 * i });
}

async function BankServices(Bank: Bank) {
  do {
    let service = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "Select Service",
      choices: ["Balance Inquiry", "Cash Withdraw", "Cash Deposit", "Exit"],
    });

    if (service.select == "Balance Inquiry") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Enter Your Account Number: ",
      });
      let account = myBank.account.find((acc) => acc.accNumber == res.num);
      if (!account) {
        console.log(chalk.red.italic.bold("Invalid Account Number"));
      }
      if (account) {
        let name = myBank.customer.find(
          (item) => item.accNumber == account?.accNumber
        );
        console.log(
          `Dear ${chalk.bold.italic.blue(
            name?.firstName
          )} ${chalk.bold.italic.blue(
            name?.lastName
          )} Your Account Balance is: ${chalk.bold.green(`$${account.balace}`)}`
        );
      }
    }
    if (service.select == "Cash Withdraw") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Enter Your Account Number: ",
      });
      let account = myBank.account.find((acc) => acc.accNumber == res.num);
      if (!account) {
        console.log(chalk.red.italic.bold("Invalid Account Number"));
      }
      if (account) {
        let ans = await inquirer.prompt({
          type: "number",
          name: "Rupee",
          message: "Please enter amount: ",
        });
        if (ans.Rupee > account.balace) {
          console.log(chalk.bold.italic.red("Insufficient Balance"));
        }
        let newBalannce = account.balace - ans.Rupee;
        Bank.transaction({ accNumber: account.accNumber, balace: newBalannce });
        // console.log(newBalannce);
      }
    }
    if (service.select == "Cash Deposit") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Enter Your Account Number: ",
      });
      let account = myBank.account.find((acc) => acc.accNumber == res.num);
      if (!account) {
        console.log(chalk.red.italic.bold("Invalid Account Number"));
      }
      if (account) {
        let ans = await inquirer.prompt({
          type: "number",
          name: "Rupee",
          message: "Please enter amount: ",
        });
        let newBalannce = account.balace + ans.Rupee;
        Bank.transaction({ accNumber: account.accNumber, balace: newBalannce });
      }
    }
    if (service.select == "Exit") {
      return;
    }
  } while (true);
}
BankServices(myBank);
