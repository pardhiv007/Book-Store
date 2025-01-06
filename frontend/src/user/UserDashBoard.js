import React from 'react'
import Base from "../core/Base"
import userImg from '../images/userbg.png'
import { isAuthenticated } from '../auth/helper/index'
import DisplayOrder from '../core/DisplayOrder'


const UserDashBoard = () => {
    const {user} =isAuthenticated()
  console.log(user)
  return (
    <Base title='UserDashBoard' description='Orders Placed'
            imageSrc= {userImg}
            imageAlt="User Image"
            imageWidth={2500}
            imageHeight={300}>
        <div class="col-md-8 container">
            <div class="tab-content profile-tab" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className='container-fluid'>
                        <div className='jumbotron text-dark text-center'>
                        <h2 className='display-5 fw-bold'>User DashBoard</h2>
                        </div>      
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                                <label>Name</label>
                        </div>
                        <div class="col-md-6">
                            <p>{user && user.name}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Email</label>
                        </div>
                        <div class="col-md-6">
                            <p>{user && user.email}</p>
                        </div>
                    </div>                       
                </div>
                <div className='row text-center'>
                    <h1 className="text-dark">Orders</h1>
                        <DisplayOrder/>
                </div>
            </div>
        </div>
    </Base>
  )
}

export default UserDashBoard;