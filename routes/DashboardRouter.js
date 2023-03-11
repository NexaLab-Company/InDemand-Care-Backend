const express = require("express");
const router = express.Router();



const dashboardOverviewController = require("../controllers/dashboardOverviewController")

router.get('/overview/of-dashboard',dashboardOverviewController.overview)


router.get('/', (req, res)=> {


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
})



module.exports = router;