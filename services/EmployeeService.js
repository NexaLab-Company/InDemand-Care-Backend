const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");







module.exports = {



    getSumOfSalariesOfAllEmployees: () => {



        return new Promise((resolve, reject) => {



            db.query("select sum(salary) as expense from employees", (error, result) => {



                if (error) {

                    console.log(error);
                }



                else {

                    resolve(result);
                }


            })
        })

    }


}

