const TestService = require("../services/TestService");




module.exports = {


    getAllUsers : async ( req , res ) => {

        TestService.getAllUsers( req , res );

    }
}