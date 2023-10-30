import inquirer from "inquirer";

class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  student: Student[] = [];
  addStudent(obj: Student) {
    this.student.push(obj);
  }
}

const persons = new Person();

let startProg = async (persons: Person) => {
  do {
    let ans = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "Who do you want to talk?",
      choices: ["Yourself", "Student"],
    });
    console.log("Welcome Guest");
    if (ans.select === "Yourself") {
      console.log("I'm talking to myself.");
      console.log("I'm well");
    }
    if (ans.select === "Student") {
      let ans = await inquirer.prompt({
        type: "input",
        name: "student",
        message: "Which student yu want to talk?",
      });

      let student = persons.student.find((val) => val.name == ans.student);

      if (!student) {
        let saveStudent = new Student(ans.student);
        persons.addStudent(saveStudent);
        console.log(`Hello! I'm ${saveStudent.name} and i'm fine`);
        console.log(persons.student);
      }
      if (student) {
        console.log(`Hello! I'm ${student.name}`);
        console.log(persons.student);
      }
    }
  } while (true);
};

startProg(persons);
