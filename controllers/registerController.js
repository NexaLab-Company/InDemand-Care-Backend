const registerService = require('../services/RegisterService')





module.exports = {



    signUp: async (req, res) => {

        registerService.saveUser(req, res);

    }


    
}