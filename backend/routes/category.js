const express=require('express')
const router=express.Router()

const {getUserById}=require("../controllers/user")
const {isSignedIn,isAdmin,isAuthenticated}=require("../controllers/auth")
const {getCategoryById,getCategory,getAllCategories,createCategory,updateCategory,removeCategory}=require("../controllers/category")

router.param("userId",getUserById)
router.param("categoryId",getCategoryById)

//actual routes
router.post("/category/create/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createCategory)
//read
router.get("/category/:categoryId",getCategory)
router.get("/categories",getAllCategories)
//update
router.put("/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateCategory
)
//delete
router.delete("/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeCategory
)

module.exports=router