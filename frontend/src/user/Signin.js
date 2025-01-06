import React, {useState} from "react";
import Base from "../core/Base";
import signinImg from '../images/signup.png';
import { Link,Navigate } from "react-router-dom";
import {signin,authenticate, isAuthenticated} from "../auth/helper/index";
import "./Signin.css";
import InputField from "./InputField";
const Signin = () => {

    const [values,setValues] =useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email,password,error,loading,didRedirect}=values

    const{user}=isAuthenticated()

    const handleChange = name => event =>{
        setValues({...values,error:false,[name]:event.target.value});
    };

    const loadingMessage = () => {
        return (
          loading && (
            <div className="alert alert-info">
                <h2>Loading ...</h2>
            </div>
          )
        );
      };
    
      const errorMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
            </div>
          </div>
        );
      };
    
    const onSubmit = async(event) =>{
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(
            
            data=>{
                console.log(data)
                if(data.error){
                    setValues({...values,error:data.error,loading:false})
                }else{
                    authenticate(data,()=>{
                        setValues({
                            ...values,
                            didRedirect:true
                        });
                    });
                }
            }
        )
        .catch(console.log("sign in request failed"))
    }

    const performRedirect = () =>{
        if(didRedirect){
        if(user && user.role==1){
            return <Navigate to="/admin/dashboard" />
            return <p>Redirect to admin</p>
        }else{
            return <Navigate to="/user/dashboard" />
            return <p>Redirect to user</p>
        }
    }
    if(isAuthenticated()){
        console.log("hii");
        return <Navigate to="/" />
    }
    }


    const signinForm = () => {
        return(
            <div className="container custom">
            <div className='container-fluid'>
           <div className='jumbotron text-dark text-center'>
              <h2 className='display-5 fw-bold'>Sign in</h2>
 
         </div>      </div>
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-dark">
                                Email
                            </label>
                            <input
                             className="form-control" 
                             type="email"
                             value={email} 
                             onChange={handleChange("email")}/>
                        </div>
                        <div className="form-group">
                            <label className="text-dark">
                                Password
                            </label>
                            <input 
                            className="form-control"
                             type="password"
                             value={password}
                             onChange={handleChange("password")} />
                        </div>
                        <div class="d-grid gap-2">
                        <button onClick={onSubmit} class="btn btn-info mt-3">
                            Submit
                        </button>
                        </div>
                        
                    </form>
                </div>
            </div>
            </div>
        )}
             {/* <div>
    //   <div className="rectangle-parent">
    //     <div className="frame-child" />
    //     <h1 className="sign-in1">Sign in</h1>
    //   </div>
    //   <div className="sign-in-form">
    //     <form className="input-fields">
    //       <div className="input-fields-child" />
    //       <InputField label="Email" />
    //       <InputField label="Password" propFlex="unset" propHeight="70px" />
    //       <button className="button-group">
    //         <div className="button">
    //           <img className="star-icon" alt="" src="/star.svg" />
    //           <div className="button1">Button</div>
    //           <img className="x-icon" alt="" src="/x.svg" />
    //         </div>
    //         <div className="button2">
    //           <img className="star-icon1" alt="" src="/star1.svg" />
    //           <div className="button3">Sign In</div>
    //           <img className="x-icon1" alt="" src="/x1.svg" />
    //         </div>
    //       </button>
    //     </form>
    //   </div>
             </div> */}


    return (
        <Base title="Sign in page" description="A page for user to Sign in!"
            imageSrc= {signinImg}
            imageAlt="Signin Image"
            imageWidth={2500}
            imageHeight={300}>
            {loadingMessage()}
            {errorMessage()}
            {signinForm()}
            {performRedirect()}
            {/* <p className="tect-white text-center">{JSON.stringify(values)}</p> */}
        </Base>
    );
}

export default Signin;