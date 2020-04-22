// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
const inquirer = require("inquirer");
class Engineer extends Employee {
    constructor(name, id, email, role, username){
        //take parameters from Employee class
        super(name, id, email, role)
        this.username = username; //unique property for Engineers
    }
    // printInfo(){
    //     console.log(`I am an ${this.role} and my github username is ${this.username}`);
    // }
    getGithub(){
        return this.username;
    }
    static engineerQuestions() {
        return inquirer.prompt({
            type: "input",
            name: "username",
            message: "What is their Github username?"
        })
    }
}

// const newEngineer = new Engineer("Emily", 0, "eresch527@gmail.com", "Engineer", "emilyresch");
// newEngineer.printInfo();
// newEngineer.getGithub();

module.exports = Engineer;
