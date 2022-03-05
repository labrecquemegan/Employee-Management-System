const { prompt } = require("inquirer")
const db = require("./db")

function mainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add an Employee",
                    value: "CREATE_EMPLOYEE"
                },
                {
                    name: "Update an Employee",
                    value: "UPDATE_EMPLOYEE"
                },
                {
                    name: "view all departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "add a department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "view all roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "add a roles",
                    value: "ADD_ROLE"
                },
                {
                    name: "QUIT",
                    value: "QUIT"
                },

            ]
        }
    ]).then(res => {
        let choice = res.choice;
    })
}



function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees)
    })
    .then(() => mainMenu());
}


function quit() {
    console.log("Goodbye!");
    process.exit()
}