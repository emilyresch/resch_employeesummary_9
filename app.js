const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//make an initial question function - asking what the role is 
//THEN make following questions that relate to specific roles
//make a confirm input type prompt to ask if they would like to add another teammate

//this is where teammate objects are pushed
const teamArray = [];

//this is the function that asks initial questions when app is run
function initialQuestions() {

    return inquirer.prompt([{
            type: "list",
            name: "role",
            message: "Who would you like to add to your team?",
            choices: ["Manager", "Intern", "Engineer"]

        },
        {
            type: "input",
            name: "name",
            message: "What is their name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?"
        },
        {
            type: "number",
            name: "id",
            message: "What is their Employee ID number?"
        }
    ]);
}

//this function invokes the initial questions before asking specific follow up questions. then it creates a new Employee using the specified class.
async function expandQuestions(){
    try{
        const employee = await initialQuestions();
        if (employee.role === "Manager"){
            const office = await Manager.managerQuestions();
            // console.log(office);
            const newManager = new Manager(employee.name, employee.id, employee.email, employee.role, office.office);
            // console.log(newManager);
            teamArray.push(newManager);
            // console.log(teamArray);
        }else if (employee.role === "Engineer"){ 
            const username = await Engineer.engineerQuestions();
            // console.log(username);
            const newEngineer = new Engineer(employee.name, employee.id, employee.email, employee.role, username.username);
            teamArray.push(newEngineer);
            // console.log(newEngineer);
        }else if(employee.role === "Intern"){
            const school = await Intern.internQuestions();
            // console.log(school);
            const newIntern = new Intern(employee.name, employee.id, employee.email, employee.role, school.school);
            teamArray.push(newIntern);
            // console.log(newIntern);
        }
        finalQuestion();
        // console.log(employee);
    }catch(error){
        console.log(error);
    }
}

function finalQuestion() {
    return inquirer.prompt({
        type: "confirm",
        name: "teammate",
        message: "Would you like to add another teammate?"
    }).then(function (answers) {
        // console.log(answers);
        if (!answers.teammate) {
            console.log("You are done adding teammates. Creating your Team Page!");
            // render(teamArray);
            //call function to write HTML if user is done inputting teammates
            writeHtml();
        } else {
            expandQuestions();

        }
    })

}

//async function to write to HTML - it will wait for all the input to be collected before writing the file
async function writeHtml(){
    const teamHtml = await render(teamArray);
    //outputPath is created above for me 
    fs.writeFile(outputPath, teamHtml, function(err){
        if (err) throw err;
        
    })
}


// invoke function to start questions
expandQuestions();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```