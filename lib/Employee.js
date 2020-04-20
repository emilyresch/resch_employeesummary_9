// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        //properties needed according to test file
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    printInfo() {
        console.log(`Your name is ${this.name}. Your ID number is ${this.id}, your email is ${this.email} and your role is ${this.role}.`);
    }
    //methods needed according to test file
    getName(){
        console.log(this.name);
    }
    getId(){
        console.log(this.id);
    }
    getEmail(){
        console.log(this.email);
    }
    getRole(){
        console.log(this.role);
    }
}

// const newEmployee = new Employee("Emily", 0, "eresch527@gmail.com", "Intern");

// newEmployee.printInfo();
// newEmployee.getName();

module.exports = Employee;