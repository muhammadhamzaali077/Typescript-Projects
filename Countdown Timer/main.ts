import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

let resposne = await inquirer.prompt({
  type: "number",
  name: "usrRes",
  message: "Enter your number of second",
  validate: (input) => {
    if (isNaN(input)) {
      return "Please enter valid number";
    } else if (input > 60) {
      return "Seconds must be in 60";
    } else {
      return true;
    }
  },
});

let input = resposne.usrRes + 2; // +2 is for start with original num because its starting -2

function startTimer(value: number) {
  let initialTime = new Date().setSeconds(new Date().getSeconds() + value);
  let intervalTime = new Date(initialTime);

  setInterval(() => {
    let currentTime = new Date();
    let diffTime = differenceInSeconds(intervalTime, currentTime);
    if (diffTime <= 0) {
      console.log("Timer Expired");
      process.exit();
    }
    let min = Math.floor((diffTime % (3600 * 24)) / 3600);
    let sec = Math.floor(diffTime % 60);
    console.log(
      `${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`
    );
  }, 1000);
}
startTimer(input);
