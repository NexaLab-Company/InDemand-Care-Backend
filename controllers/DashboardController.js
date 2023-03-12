const IncomeService = require("../services/IncomeService");
const ExpenseService = require("../services/ExpenseService");
const IncomeAndExpenseDto = require("../dto/IncomeAndExpenseDto");
const GenericResponse = require("../dto/GenericResponse");







module.exports = {

    


    getIncomeAndExpenseOfCurrentYear : async ( req , res ) => {
        

        
       const incomeOfCurrentYear =  await  IncomeService.getIncomeOfCurrentYear( req , res );
       const expenseOfCurrentYear = await  ExpenseService.getExpenseOfCurrentYear( req , res );
       

       
       return res.send( new GenericResponse("Income And Expense of current year" ,
       new IncomeAndExpenseDto( incomeOfCurrentYear, expenseOfCurrentYear ) 
       ))
       

    }




}