const express  = require("express");
const app = express();




app.get( "/hello" , ( req , res ) => {


    res.send("Hello");


} )



const port = process.env.PORT || 3001;


app.listen( port , () => {


    console.log('App started on port '+ port );


})


