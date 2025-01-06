
import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import cartImg from '../images/cart.png'
import { loadCart } from "./helper/cartHelper";
import Paymentb from "./paymentb";
import "./Cart.css";
import "./ProductCard.css";
const Cart = () => {
 const [products, setProducts] = useState([]);
 const [reload, setReload] = useState(false);

 useEffect(() => {
   setProducts(loadCart());
 }, [reload]);

 const loadAllProducts = products => {
   return (
     <div className="d-flex justify-content-evenly flex-wrap">
       {/* <h2>Products</h2> */}
       {products.map((product, index) => (
        //  <div key={index} className="col-4 mb-4">
        //  <div className='m-4'>
        <Card
           key={index}
           product={product}
           removeFromCart={true}
           addtoCart={false}
           setReload={setReload}
           reload={reload}
         />
      //  </div>
      //  </div>
         
       ))}
     </div>
   );
 };
 const loadCheckout = () => {
   return (
     <div>
       <h2>Checkout</h2>
     </div>
   );
 };

 return (
   <Base title="Cart Page" description="Ready to checkout"
            imageSrc= {cartImg}
            imageAlt="Signin Image"
            imageWidth={2500}
            imageHeight={300}>
     {/* <div className="row text-center">
       <div className="col-6">
         {products.length > 0 ? (
           loadAllProducts(products)
         ) : (
           <h4>No products</h4>
         )}
       </div>
       <div className="col-6">
         <Paymentb products={products}/> 

     </div>
     </div> */}
     <section className="cart-wrapper">
        <div className="cart1">
          <h1 className="your-cart">Your cart</h1>
          <img
            className="shopping-cart-img-1-icon"
            loading="lazy"
            alt=""
            src="/shoppingcartimg-1@2x.png"
          />
        </div>
      </section>
      {/* <section className="product-cards-parent">
      {products.length > 0 ? (
           loadAllProducts(products)
         ) : (
           <h4>No products</h4>
         )}
      </section> */}
      <div className="device-details">
    <div className="device-details-child" />
      <div className="product-content">
        {products.length > 0 ? (
            loadAllProducts(products)
        ) : (
            <h4>No products</h4>
        )}
      </div>

    </div>
    <div className="d-flex justify-content-center">
         <Paymentb products={products}/> 
     </div>
   </Base>
 );
};

export default Cart;
