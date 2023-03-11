const express = require("express");
const app = express();
const session = require('express-session');
var passport = require('passport');
const cors = require("cors");
require('dotenv').config()
require('./config/passportConfig')(passport)


//    ****************************      Database Connected         ****************************

require("./db/DBConnection");
// const db = require('./db/DBConnection')


// const query = 'SELECT * FROM users WHERE email = ? ';

// db.query(query, ["anas@gmail.com"], (error, results) => {
//     if (error){
//     } else {
//         console.log(results[0].role);
//     }
// })


const corsOptions = {

    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "somesadad",
    resave: false,
    saveUninitialized: true,

}))
app.use(passport.initialize())
app.use(passport.session())






// *************************     All Routes         *************************************





const testRouter = require("./routes/TestRouter");
const userRouter = require('./routes/UserRouter')







function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.use('/user', userRouter)



app.get('/dashboard', isAuthenticated, function (req, res) {


    var userRole = ''


    switch (req.user.role) 
    
    {
        case 1:
            userRole = "super admin"
            break;
    
        case 2:
            userRole = "company"
            break;
    
        case 3:
            userRole = "client"
            break;
    
        case 4:
            userRole = "user"
            break;
    
        default:
            break;
    }

    res.send(`Welcome ${req.user.name} you are a  ${userRole}`);
});





app.get('/logout', (req, res) => {


    req.logout();
    res.redirect('/login');


});






app.get("/hello", (req, res) => {


    res.send("Hello");


})








const port = process.env.PORT || 3001;





app.listen(port, () => {


    console.log('App started on port ' + port);


})


