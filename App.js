const express  = require("express");
const app = express();
const cors= require("cors");







//    ****************************      Database Connected         ****************************




require("./db/DBConnection");





app.use
(
    cors
    (
        {
            origin: '*',
        }
    )
)





app.use( express.json() );








// *************************     All Routes         *************************************





const testRouter = require("./routes/TestRouter");









app.use( "" , testRouter );







app.get( "/hello" , ( req , res ) => {


    res.send("Hello");


} )







const port = process.env.PORT || 3001;





app.listen( port , () => {


    console.log('App started on port '+ port );


})


