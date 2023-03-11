const express = require("express");
const passport = require("passport");
const router = express.Router();




const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');






router.post('/register', registerController.signUp );





router.post('/login', passport.authenticate('local', { 
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true 
  }));







module.exports = router