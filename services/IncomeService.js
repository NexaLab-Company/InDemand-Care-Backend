const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");





module.exports = {




    getIncomeOfCurrentYear: (req, res) => {



        return new Promise((resolve, reject) => {



            db.query("SELECT id , inc.income as incomeOfCurrentYear , month , year FROM income inc where inc.year = 2023 order by inc.id desc limit 1 ",



                (error, result) => {




                    if (error) {

                        console.log(error);
                    }




                    else {

                        resolve( result[0] == undefined ? null : result[0].incomeOfCurrentYear );

                    }

                })
        })


    },







    saveIncome: async (income) => {



        const date = new Date();



        db.query("insert into income ( income , month , year ) values( ? , ? , ? ) ",



            [income, date.getMonth(), date.getFullYear()],



            (error, result) => {




                if (error) {

                    console.log(error);
                }




                else {

                    return new GenericResponse("Saved Successfully", result);
                }



            })


    }

};