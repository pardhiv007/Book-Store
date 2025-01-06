import React, {useState} from "react";
import Base from "../core/Base";
import signupImg from '../images/signup.png';
import { Link } from "react-router-dom";
import {signup} from "../auth/helper/index";
import "./Signin.css";
const Signup = () => {

    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    });

    const {name,email,password,error,success} = values

    const handleChange = name => event =>{
        setValues({...values,error:false,[name]:event.target.value});
    };

    const onSubmit =async(event) =>{
        event.preventDefault();
        setValues({...values,error: false})
        signup({name,email,password})
        .then(
            
            data=>{
                console.log("hii")
                console.log(data);
                if(data.error){
                    setValues({...values,error:data.error,success:false})
                }else{
                    setValues({
                        ...values,
                        name:"",
                        email:"",
                        password:"",
                        error:"",
                        success:true
                    });
                }
            }
        )
        .catch(console.log("error in sign up"))
    }

    const signupForm = () => {
        return(
          <div className="container custom">
            <div className='container-fluid'>
           <div className='jumbotron text-dark text-center'>
              <h2 className='display-5 fw-bold'>Sign up</h2>
 
         </div>      </div>
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-dark">
                                Name
                            </label>
                            <input className="form-control"
                             onChange={handleChange("name")}
                             type="text"
                             value={name} />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">
                                Email
                            </label>
                            <input className="form-control"
                             onChange={handleChange("email")} 
                             type="email"
                             value={email} />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">
                                Password
                            </label>
                            <input 
                            onChange={handleChange("password")}
                             className="form-control"
                              type="password"
                              value={password} />
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
        )
    }

    const successMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
              >
                New account was created successfully. Please
                <Link to="/signin">Login Here</Link>
              </div>
            </div>
          </div>
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

    return (
        <Base title="Sign up page" description="A page for user to sign up!"
              imageSrc= {signupImg}
              imageAlt="Signup Image"
              imageWidth={2500}
              imageHeight={300}>
            {successMessage()}
            {errorMessage()}
            {signupForm()}
            {/* <p  className="text-white text-center">{JSON.stringify(values)}</p> */}
        </Base>
    );
}

export default Signup;