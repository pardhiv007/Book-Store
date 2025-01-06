const express=require("express")
const router=express.Router()

const {getUserById, pushOrderInPurchaseList}=require("../controllers/user")
const {isAdmin,isAuthenticated,isSignedIn}=require("../controllers/auth")
const{updateStock, getProductById}=require("../controllers/product")
const { getOrderById, createOrder,getAllOrders ,updateStatus,getOrderStatus, getUserOrders}=require("../controllers/order")


router.param("userId",getUserById)
router.param("orderId",getOrderById)

router.post("/order/create/:userId",
    isSignedIn,
    isAuthenticated,
    pushOrderInPurchaseList,
    updateStock,
    createOrder
)

router.get("order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)
router.post("/order/:userId",isSignedIn,isAuthenticated,getUserOrders)
router.get("/order/status/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    getOrderStatus
)
router.put("/order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus)
router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)


module.exports=router
