const express = require("express");
const router = express.Router();
const DashboardController = require("../controllers/DashboardController"); 



router.get("/income-and-expense/of-current-year" , DashboardController.getIncomeAndExpenseOfCurrentYear );



module.exports = router;