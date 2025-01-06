import React from 'react'
import Base from "../core/Base"
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import adminImg from '../images/adminbg.png'

const AdminDashBoard = () => {

  const {
    user : {name, email, role}
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <>
      <div className='card'>
        <h4 className='card-header bg-primary text-white'>Admin Navigation</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link to="/admin/create/category" className='nav-link'>
            Create Categories
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to="/admin/categories" className='nav-link'>
              Manage Categories
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to="/admin/create/product" className='nav-link'>
              Create Product
            </Link>
          </li>
          
          <li className='list-group-item'>
            <Link to="/admin/products" className='nav-link'>
              Manage Products
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to="/admin/orders" className='nav-link'>
              Manage Orders
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to="/admin/users" className='nav-link text-success'>
              Manage Users
            </Link>
          </li>
        </ul>
      </div>
      </>
    )
  };

  const adminRightSide = () => {
    return (
      <div className='card mb-4'>
        <h4 className='card-header'>
          Admin Information
        </h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <span className='badge text-bg-success'>Name:</span> {name}
          </li>
          <li className='list-group-item'>
            <span className='badge text-bg-success mr-2'>Email:</span> {email}
          </li>
          <li className='list-group-item'>
            <span className='badge text-bg-danger mr-2'>Admin Area</span>
          </li>
        </ul>
      </div>
    )
  };

  return (
    <Base title='Welcome to Admin area' 
    description='Manage all your products here'
    className='container p-4'
            imageSrc= {adminImg}
            imageAlt="Admin Image"
            imageWidth={2500}
            imageHeight={300}
    >
                          <div className='container-fluid'>
                        <div className='jumbotron text-dark text-center'>
                        <h2 className='display-5 fw-bold'>Admin DashBoard</h2>
                        </div>      
                    </div>
        <div className='row'>
          <div className='col-3'>
            {adminLeftSide()}
          </div>
          <div className='col-9'>
            {adminRightSide()}
          </div>
        </div>
        
        
    </Base>
  )
}

export default AdminDashBoard;