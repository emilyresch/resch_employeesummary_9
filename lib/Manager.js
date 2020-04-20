// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(officeNumber){
        super("Sylvie", 0, "sylvielovestotravel@gmail.com", "Manager");
        this.office = officeNumber;
    }
    printInfo(){
        console.log(`My name is ${this.name}, and I am a ${this.role}. I am in office number ${this.officeNumber}.`);
    }
    getOfficeNumber(){
        console.log(`Office number: ${this.officeNumber}`);
    }
}

const newManager = new Manager(3);
newManager.printInfo();
newManager.getOfficeNumber();

module.exports = Manager;