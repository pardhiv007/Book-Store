
import React,{useState,useEffect} from "react";
import { isAuthenticated } from "../auth/helper";
import { deleteUserId, getUsers } from "./helper/adminapicall";
import Base from "../core/Base";





const ManageUsers=()=>{
    const UserCard=({
        user,
        index
    })=>{
        const {user:auser,token} =isAuthenticated()
        return (
              <div className="card text-dark border border-info ">
            <div className="card-header lead">{index+1}  User Details</div>
            <div className="card-body">
            
              <p className="lead  font-weight-normal text-wrap">
              
              username:{user.name}
              </p>
              <p className="lead  font-weight-normal text-wrap text-left">
              
              email:{user.email}
              </p>
              
              
             <button onClick={ ()=>{
                deleteUser({"userId":user._id},auser._id,token)
             }
              
              }  className="btn btn-danger">
                Delete
             </button>
        
              
            </div>
          </div>
            
          )
    }
    
const deleteUser=(userId, Adminid, token)=>{
    deleteUserId(userId, Adminid, token).then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          preload();
        }
      });
};
    const [users, setUsers] = useState([]);
    
     const { user, token } = isAuthenticated();
    
     const preload = () => {
       getUsers(user._id,token).then(data => {
         if (data.error) {
           console.log(data.error);
         } else {
           setUsers(data);
         }
       });
     };
    
     useEffect(() => {
       preload();
     }, []);
    
     
     return (
      <Base>
          <div className='row text-center'>
        <h1 className="text-dark">Users</h1>
        <div className='row container'>
          {users.map((user, index) => {
            
            
                return (
                  <div key={index} className="col-4 mb-4 px-4">
                    <UserCard user={user} index={index} />
                  </div>
                );
              })}
        </div>
        </div>
      </Base>
        
      )
    
    }

export default ManageUsers