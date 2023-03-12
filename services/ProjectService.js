const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");







module.exports = {




    getSumOfCostsOfProjects: () => {




        return new Promise((resolve, reject) => {



            db.query("select sum(cost) as income from projects", (error, result) => {



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

