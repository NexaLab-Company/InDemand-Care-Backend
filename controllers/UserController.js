const UserService = require('../services/UserService')





module.exports = {



    signUp : async ( req , res ) => {

        
        UserService.saveUser(req, res);

    }



}