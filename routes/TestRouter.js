const express = require("express");
const router = express.Router();
const TestController = require("../controllers/TestController"); 



router.get("/test" , TestController.getAllUsers );



module.exports = router;