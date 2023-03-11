

class IncomeAndExpenseDto {


    incomeOfCurrentYear;
    expenseOfCurrentYear;




    constructor( income , expense ) {

        this.incomeOfCurrentYear = income;
        this.expenseOfCurrentYear = expense;
    }







    get incomeOfCurrentYear() {
        
        return this.incomeOfCurrentYear;
    }

    



    

    set incomeOfCurrentYear( data ) {
        
        this.incomeOfCurrentYear = data;
    }








    get expenseOfCurrentYear() {
        
        return this.expenseOfCurrentYear;
    }








    set expenseOfCurrentYear( data ) {
        
        this.expenseOfCurrentYear = data;
    }




    
}



module.exports = IncomeAndExpenseDto;