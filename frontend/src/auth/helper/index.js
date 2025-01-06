import {API} from "../../backend"

import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Example: Navigate to the home page
    navigate('/');
  };

  // Rest of your component logic...
}


export const signup= async (user)=>{
    try {
        const response = await fetch(`${API}signup`, {
            method: "POST",
            headers: {
                
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export const signin=async (user)=>{
    try {
        const response = await fetch(`${API}signin`, {
            method: "POST",
            headers: {
                
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
}

export const authenticate=(data,next)=>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}

export const signout=(next)=>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next();
        

        return fetch(`${API}/signout`,{
            method:"GET"
        })
        .then(
            response=>{console.log("signout response")

            }
    )
        .catch(err => console.log(err))
    }
}

export const isAuthenticated=()=>{
    if(typeof window == "undefined"){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    }else{
        return false;
    }
}