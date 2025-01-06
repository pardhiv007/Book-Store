const express=require("express")
const router=express.Router()

const {getProductById,createProduct,getProduct, photo,deleteProduct,updateProduct,getAllProducts,getAllUniqueCategories}=require("../controllers/product")
const {getUserById}=require("../controllers/user")
const {isAdmin,isAuthenticated,isSignedIn}=require("../controllers/auth")
//params
router.param("userId",getUserById)
router.param("productId",getProductById)
//routes
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct)

router.get("/product/:productId",getProduct)
router.get("/product/photo/:productId",photo)

router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct)
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct)

router.get("/products",getAllProducts)

router.get("/products/categories",getAllUniqueCategories)

module.exports=router