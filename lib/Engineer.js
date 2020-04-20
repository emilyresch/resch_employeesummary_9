// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(github){
        //take parameters from Employee class
        super("Emily", 0, "eresch527@gmail.com", "Engineer")
        // super(name, id, email, role)
        this.github = github; //unique property for Engineers
    }
    printInfo(){
        console.log(`I am an ${this.role} and my github username is ${this.github}`);
    }
    getGithub(){
        console.log(this.github);
    }
}

const newEngineer = new Engineer("emilyresch");
newEngineer.printInfo();
newEngineer.getGithub();

module.exports = Engineer;
