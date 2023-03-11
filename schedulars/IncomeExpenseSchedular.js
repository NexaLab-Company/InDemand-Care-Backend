const cron = require('node-cron');
const EmployeeService = require("../services/EmployeeService");
const ExpenseService = require("../services/ExpenseService");
const ProjectService = require("../services/ProjectService");
const IncomeService = require("../services/IncomeService");





cron.schedule('47 18 * * 6' , async () => {
  

    const expenditure = await EmployeeService.getSumOfSalariesOfAllEmployees();

    const revenue = await ProjectService.getSumOfCostsOfProjects();

    ExpenseService.saveExpenses ( expenditure[0].expense );

    IncomeService.saveIncome( revenue[0].income );



});

