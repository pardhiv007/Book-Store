const express = require('express');
const { signout,signup,signin,isSignedIn } = require('../controllers/auth');
const router = express.Router()
const {check,validationResult}=require('express-validator')
router.get("/signout"
,signout);
router.post("/signup",[
    check("name").isLength({min:3}).withMessage("name should be 3 char long"),
    check("email").isEmail().withMessage("enter a valid mail"),
    check("password","it should 5 long").isLength({min:5})
],signup)

router.post("/signin",[
    check("email").isEmail().withMessage("enter a valid mail"),
    check("password","it should 5 long").isLength({min:5})
],signin)





module.exports=router;