// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        //properties needed according to test file
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    // printInfo() {
    //     console.log(`Your name is ${this.name}. Your ID number is ${this.id}, your email is ${this.email} and your role is ${this.role}.`);
    // }
    //methods needed according to test file
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
    // initialQuestion() {
    //     return inquirer.prompt([{
    //             type: "list",
    //             name: "role",
    //             message: "Who would you like to add to your team?",
    //             choices: ["Manager", "Intern", "Engineer"]
    
    //         },
    //         {
    //             type: "input",
    //             name: "name",
    //             message: "What is their name?"
    //         },
    //         {
    //             type: "input",
    //             name: "email",
    //             message: "What is their email address?"
    //         },
    //         {
    //             type: "number",
    //             name: "ID number",
    //             message: "What is their Employee ID number?"
    //         }
    //     ])
    // }
}

// const newEmployee = new Employee("Emily", 0, "eresch527@gmail.com", "Intern");

// newEmployee.printInfo();
// newEmployee.getName();

module.exports = Employee;