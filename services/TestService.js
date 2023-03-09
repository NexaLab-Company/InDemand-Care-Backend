const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");



module.exports = {


    getAllUsers : async ( req , res ) => {

        db.query("select * from users", (error, result) => {


            if (error) 
            {
                console.log(error);
            }



            else
            {
                return res.send(new GenericResponse("List of All Users" , result ));
            }



        })
    }
}