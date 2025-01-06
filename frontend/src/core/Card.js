import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Navigate } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductInfoCard.css";
import "./ProductCard.css";
import { isAuthenticated } from "../auth/helper";



const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
  reload = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "Book Title";
  const cartDescrption = product ? product.description : "Book Description";
  const cartPrice = product ? product.price : "DEFAULT";
  const {user}=isAuthenticated();
  if(user && user.role==1){
    addtoCart = false
  }
  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Navigate to="/cart" />;
    }
  };

  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    // <div className="card border border-info ">
    //   <div className="card-header lead">{cartTitle}</div>
    //   <div className="card-body">
    // {getARedirect(redirect)}
    // <ImageHelper product={product} />
    //     <p className="lead bg-info font-weight-normal text-wrap">
    //       {cartDescrption}
    //     </p>
    //     <p className="btn btn-info rounded  btn-sm px-4">$ {cartPrice}</p>
        // <div className="row">
        //   <div className="col-12">{showAddToCart(addtoCart)}</div>
        //   <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        // </div>
    //   </div>
    // </div>
    
    <div>
      <div className="d-flex justify-content-center">
        {getARedirect(redirect)}
      <ImageHelper product={product} />
      </div>
      
      <div className="body">
      <div className="text-center font-weight-bold card-header lead title text-wrap" style={{color: "blue !important"}}>{cartTitle}</div>
      <p className="text-center lead font-weight-normal text-wrap dummy">
          {cartDescrption}
      </p>
      <p className="text-center px-4">₹ {cartPrice}</p>
        {/* <div className="text">
          <div className="product-subtitle">{cartTitle}</div>
        </div>
        <div className="text-strong">
          <div className="text-strong1">₹ {cartPrice}</div>
        </div>
        <div className="text-small lead font-weight-normal text-wrap">
          <div className="text-small1 lead font-weight-normal text-wrap">{cartDescrption}</div>
        </div> */}
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;