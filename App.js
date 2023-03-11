const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()









// **********************             Passport Config                   ***********************************



const session = require('express-session');


var passport = require('passport');



require('./config/passportConfig')(passport)









//    ****************************      Database Connected         ****************************




require("./db/DBConnection");






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

}));







app.use(passport.initialize())
app.use(passport.session())










// *************************     All Routes         *************************************







const userRouter = require('./routes/UserRouter');







app.use('/user', userRouter);










function isAuthenticated(req, res, next) {


    if (req.isAuthenticated()) 
    
    {
        return next();
    }

    res.redirect('/login');
}








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


