const express = require("express");
const passport = require("passport");
const router = express.Router();




const UserController = require('../controllers/UserController');






router.post('/register', UserController.signUp );






router.post('/login', passport.authenticate( 'local' , {


    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true 


  }));







module.exports = router