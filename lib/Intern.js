// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(school){
        super("Valerie", 0, "vresch926gmail.com", "Intern");
        this.school = school;
    }
    printInfo(){
        console.log(`My name is ${this.name}, and I am an ${this.role}. I go to ${this.school}.`);
    }
    getSchool(){
        console.log(this.school);
    }
}

const newIntern = new Intern("NYU");
newIntern.printInfo();

module.exports = Intern;