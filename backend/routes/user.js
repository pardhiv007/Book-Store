const express=require('express')
const router=express.Router()

const {getUserById,getUser,getAllUsers, updateUser, userPurchaseList,deleteUser}=require("../controllers/user")
const {isSignedIn,isAuthenticated,isAdmin}=require("../controllers/auth")

router.param("userId",getUserById)


router.get("/user/:userId",isSignedIn,isAuthenticated,getUser)
router.get("/users",getAllUsers)
router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser)
router.get("/user/:userId",isSignedIn,isAuthenticated,userPurchaseList)
router.get("/users/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllUsers)
router.delete("/user/deleteUser/:userId",isSignedIn,isAuthenticated,isAdmin,deleteUser)
module.exports=router;