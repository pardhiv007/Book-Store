import React,{useEffect, useState} from "react";
import { isAuthenticated } from "../auth/helper";
import { getOrders } from "./helper/adminapicall";
import OrderCard from "../core/OrderCard";
import Base from "../core/Base";

const ManageOrders=()=>{
const [orders, setOrders] = useState([]);

 const { user, token } = isAuthenticated();

 const preload = () => {
   getOrders(user._id,token).then(data => {
     if (data.error) {
       console.log(data.error);
     } else {
       setOrders(data);
     }
   });
 };

 useEffect(() => {
   preload();
 }, []);

 
 return (
  <Base>
    <div className='row text-center'>
    <h1 className="text-dark">Orders</h1>
    <div className='row container'>
      {orders.map((product, index) => {
        const a=product.amount
        const products=product.products
        
            return (
              <div key={index} className="col-4 mb-4 px-4">
                <OrderCard order={product} products={products} index={index} />
              </div>
            );
          })}
    </div>
    </div>
  </Base>
    
  )

}

export default ManageOrders