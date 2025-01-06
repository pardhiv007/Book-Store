
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories, createaProduct, createOrder } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper/index";
import { cartEmpty, loadCart } from "../core/helper/cartHelper";
import productImg from '../images/addProduct.png';

const AddOrder = () => {
const { user, token } = isAuthenticated();
const [prod, setProd] = useState(loadCart());
const getAmount = () => {
    let amount = 0;
    prod.map(p => {
      amount = amount + p.price;
    });
    return amount;
  };
const [values, setValues] = useState({
  products: [],
  address:"",
  amount:getAmount(),
  success:false,
  error: false,
});


const {
  products,
  address,
  amount,
  error,
  success,
} = values;

//setValues({...values,amount:getAmount()})
const onSubmit = event => {
  event.preventDefault();
  setValues({...values,error:"",success:false})
  setProd(loadCart());
//   prod.map((p,index)=>{
//     setValues(...values,
//         products:InCart)
 // })
  //console.log(InCart)
  const data={
    order:{
        "products":loadCart(),
        "address":address,
        "amount":amount
    }
  }
  createOrder(user._id,token,data).then(data=>{
    if(data.error){
        setValues({...values,
            error:data.error
        })
    }else{
        setValues({
            ...values,
            amount:"",
            address:"",
            success:true,
        })
        cartEmpty(()=>{
            window.history.back()
        })
    }
  }

  )
//   setValues({ ...values, error: "", loading: true });
//   createaProduct(user._id, token, formData).then(data => {
//     if (data.error) {
//       setValues({ ...values, error: data.error });
//     } else {
//       setValues({
//         ...values,
//         name: "",
//         description: "",
//         price: "",
//         photo: "",
//         stock: "",
//         loading: false,
//         createdProduct: data.name
//       });
//     }
//  });
};

const handleChange = name => event => {
    setValues({...values,[name]:event.target.value});
  };

const successMessage = () => {
    if (success) {
        return <h4 className="text-success">Order placed successfully</h4>;
      }
    };

const warningMessage = () => {
    if (error) {
      return <h4 className="text-success">Failed to place order</h4>;
    }
};


const myOrderForm=()=>(
    <form>
      <div className="form-group">
        <p className="lead">Enter the Address </p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("address")}
          value={address}
          autoFocus
          required
          placeholder="Door No."
        />
        <input
          type="text"
          className="form-control my-3"
          //onChange={handleChange("address")}
          //value={address}
          autoFocus
          required
          placeholder="City"
        />
        <input
          type="text"
          className="form-control my-3"
          //onChange={handleChange("address")}
          //value={address}
          autoFocus
          required
          placeholder="State"
        />
        <input
          type="tel"
          className="form-control my-3"
          //onChange={handleChange("address")}
          //wvalue={address}
          autoFocus
          required
          placeholder="Phone Number"
        />
        <input
          type="Number"
          className="form-control my-3"
         // onChange={handleChange("amount")}
          value={amount}
          autoFocus
          disabled
          required
          placeholder="Amount"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Place order
        </button>
      </div>
    </form>
    )

  return (
    <Base title='Update a category here'
     description='update a new category for new books'
     className='container bg-info p-4'
            imageSrc= {productImg}
            imageAlt="Product Image"
            imageWidth={2500}
            imageHeight={300}
    >
        <div className='row bg-white rounded'>
            <div className='col-md-8 offset-md-2'>
                {successMessage()}
                {warningMessage()}
                {myOrderForm()}
                {/* {goBack()} */}
            </div>
        </div>
    </Base>
  );
}

export default AddOrder;
