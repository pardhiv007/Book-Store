import React,{Fragment} from 'react'
import {Link, useLocation, useNavigate ,Navigate} from "react-router-dom"
import {isAuthenticated,signout} from "../auth/helper/index"
import "./Navigation1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  return (
    <header className={`navigation ${className}`}>
      <div className="navigation-inner">
        <div className="instance-item" />
      </div>
      <div className="branding-wrapper">
        <div className="branding">
          <a className="book-store1">Book Store</a>
          <img
            className="logofinal-1-icon1"
            loading="lazy"
            alt=""
            src="/logofinal-1@2x.png"
          />
        </div>
      </div>
      <div className="action-buttons">
        <Button className="button-labels" variant="primary" size="lg">
        <Link 
                className='nav-link' to="/">
                    Home
                </Link>
        </Button>
        {isAuthenticated() && isAuthenticated().user.role===0 && (
            <Button
            className="button-labels1"
            variant="outline-primary"
            size="lg"
          >
                <Link 
                className='nav-link px-2 link-secondary' to="/cart">
                    Cart
                </Link>
            </Button>
        )}
        {isAuthenticated() && isAuthenticated().user.role===0 && (
                <Button
                className="button-labels1"
                
                variant="outline-primary"
                size="lg"
              >
                <Link 
                className='nav-link px-2' to="/user/dashboard">
                    DashBoard
                </Link>
            </Button>
            )}
            {isAuthenticated() && isAuthenticated().user.role===1 && (
                <Button
                className="button-labels1"
                
                variant="outline-primary"
                size="lg"
              >
                <Link 
                className='nav-link px-2' to="/admin/dashboard">
                    DashBoard
                </Link>
            </Button>
            )}
            {!isAuthenticated() && (
             <Fragment>
             <Button
          className="button-labels1"
          
          variant="outline-primary"
          size="lg"
        >
                 <Link 
                 className='nav-link px-2' to="/signup">
                     Signup
                 </Link>
             </Button>
             <Button
          className="button-labels1"
          
          variant="outline-primary"
          size="lg"
        >
                 <Link 
                  className='nav-link px-2' to="/signin">
                     Signin
                 </Link>
             </Button>
             </Fragment>
           )}
           {isAuthenticated() && (
        <Button
        className="button-labels1"
        
        variant="outline-primary"
        size="lg"
      >
          <span
            className="nav-link px-2 text-info"
            onClick={
                
                () => {
              signout(()=>{
               window.history.back()
              });
            }}
          >
            Signout
          </span>
        </Button>
      )}
      </div>
    </header>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
