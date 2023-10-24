class School {
    addStudent(stdobj) {
        this.students.push(stdobj);
    }
    addTeacher(teachobj) {
        this.teachers.push(teachobj);
    }
    constructor(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
}
class Student {
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
    constructor() {
        super(...arguments);
        this.email = "";
        this.contact = "";
        this.salary = "";
    }
    addInfo(email, contact, salary) {
        this.email = email;
        this.contact = contact;
        this.salary = salary;
    }
}
let school1 = new School("Westminster");
let school2 = new School("Karachi Grammar School");
let s1 = new Student("Humaiyon", 15, school1.name);
let s2 = new Student("Anmata", 12, school1.name);
let s3 = new Student("Hamza Ali", 19, school2.name);
let t1 = new Teacher("M.Qasim", 30, school1.name);
let t2 = new Teacher("Rustam", 24, school1.name);
let t3 = new Teacher("Ali", 23, school2.name);
t1.addInfo("mqasim077@gmail.com", "03152968211", "35000");
t2.addInfo("rustamali032@gmail.com", "03101055826", "35000");
t3.addInfo("aliaziz1310@gmail.com", "03101124172", "30000");
school1.addStudent(s1);
school1.addStudent(s2);
school2.addStudent(s3);
school1.addTeacher(t1);
school1.addTeacher(t2);
school2.addTeacher(t3);
console.log(school1);
console.log(school2);
export {};
