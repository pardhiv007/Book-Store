import React,{Fragment} from 'react'
import {Link, useLocation, useNavigate ,Navigate} from "react-router-dom"
import {isAuthenticated,signout} from "../auth/helper/index"
import "./Navigation1.css";

const currentTab = (location, path) => {
    if (location.pathname === path) {
        return {color: "#2ecc72"}
    } else {
        return {color: "#000000"}
    }
}


function MyComponent() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Example: Navigate to the home page
    navigate('/');
  };

  // Rest of your component logic...
}



const Menu = ({ className = "" }) => {
    const location = useLocation();
    return (
    <div className='container'>
        <header className={`navigation ${className}`}>
            <div className='class="col-md-3 mb-2 mb-md-0'>
            </div>
        <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
            <li className='nav-item'>
                <Link style={currentTab(location, "/")} 
                className='nav-link' to="/">
                    Home
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role===0 && (
            <li className='nav-item'>
                <Link style={currentTab(location, "/cart")} 
                className='nav-link px-2 link-secondary' to="/cart">
                    Cart
                </Link>
            </li>
            )}
           
            {isAuthenticated() && isAuthenticated().user.role===0 && (
                <li className='nav-item'>
                <Link style={currentTab(location, "/admin/dashboard")} 
                className='nav-link px-2' to="/user/dashboard">
                    DashBoard
                </Link>
            </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role===1 && (
                <li className='nav-item'>
                <Link style={currentTab(location, "/admin/dashboard")} 
                className='nav-link px-2' to="/admin/dashboard">
                    DashBoard
                </Link>
            </li>
            )}
           {!isAuthenticated() && (
             <Fragment>
             <li className='nav-item'>
                 <Link style={currentTab(location, "/signup")} 
                 className='nav-link px-2' to="/signup">
                     Signup
                 </Link>
             </li>
             <li className='nav-item'>
                 <Link style={currentTab(location, "/signin")}
                  className='nav-link px-2' to="/signin">
                     Signin
                 </Link>
             </li>
             </Fragment>
           )}

            {isAuthenticated() && (
        <li className="nav-item">
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
        </li>
      )}
        </ul>
        </header>
    </div>
)}

export default Menu;