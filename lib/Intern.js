// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email, role); //grab parameters from Employee
        this.school = school; //property unique to Intern
    }
    // printInfo(){
    //     console.log(`My name is ${this.name}, and I am an ${this.role}. I go to ${this.school}.`);
    // }
    getSchool(){
        return this.school;
    }
    static internQuestions() {
        return inquirer.prompt({
            type: "input",
            name: "school",
            message: "What college/university do they attend?"
        })
    }
}

// const newIntern = new Intern("Valerie", "0", "test@test.com", "Intern", "NYU");
// newIntern.printInfo();
// newIntern.getSchool();

module.exports = Intern;