// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
const inquirer = require("inquirer");
class Manager extends Employee {
    constructor(name, id, email, role, office) {
        super(name, id, email, role); //grab params from Employee
        this.office = office; //property unique to manager
    }
    // printInfo() {
    //     console.log(`My name is ${this.name}, and I am a ${this.role}. I am in office number ${this.officeNumber}.`);
    // }
    getOfficeNumber() {
        return this.office;
    }
    static managerQuestions() {
            return inquirer.prompt({
                type: "number",
                name: "office",
                message: "What is their office number?"
            })
        // console.log()
    }
}

// const newManager = new Manager("Emily", "2", "test@test.com", "Manager", 3);
// newManager.printInfo();
// newManager.getOfficeNumber();
// Manager.managerQuestions();

module.exports = Manager;