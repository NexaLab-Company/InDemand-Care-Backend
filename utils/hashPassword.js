const bcrypt = require('bcrypt');


function hashPass( password , cb ) {


    bcrypt.genSalt( 10 ,  ( error , salt ) => {


        if (error)
        {

            cb (null,error)

        }
        

        else
        {

            bcrypt.hash(password, salt, (error, hash) => {


                if (error)
                
                {

                    cb (null,error)

                }

                
                else
                {
                    cb (hash,null)
                }


                
            })

        }
    })

}




module.exports = hashPass;

