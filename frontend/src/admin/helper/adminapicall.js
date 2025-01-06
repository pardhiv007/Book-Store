import { API } from "../../backend";

export const createCategory=async (userId,token,category)=>{
    try {
        const response = await fetch(`${API}/category/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
}

export const getCategories = async () => {
    try {
        const response = await fetch(`${API}/categories`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
  };

  export const deleteCategory = async (categoryId, userId, token) => {
    try {
          const response = await fetch(`${API}category/${categoryId}/${userId}`, {
              method: "DELETE",
              headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${token}`
              }
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };
  
  export const getCategory = async (categoryId) => {
    try {
          const response = await fetch(`${API}/category/${categoryId}`, {
              method: "GET"
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };

  export const updateCategory = async (productId, userId, token, product) => {
    try {
        console.log(product)
          const response = await fetch(`${API}category/${productId}/${userId}`, {
              method: "PUT",
              headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${token}`,
                  "Content-Type":"application/json"
              },
              body: JSON.stringify(product)
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };
  //products calls
  
  //create a product
  export const createaProduct = async (userId, token, product) => {
    try {
          const response = await fetch(`${API}/product/create/${userId}`, {
              method: "POST",
              headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${token}`
              },
              body: product
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };
  
  //get all products
  export const getProducts = async () => {
    try {
          const response = await fetch(`${API}/products`, {
              method: "GET"
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };
  
  //delete a product
  
  export const deleteProduct = async (productId, userId, token) => {
    try {
          const response = await fetch(`${API}/product/${productId}/${userId}`, {
              method: "DELETE",
              headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${token}`
              }
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };
  
  //get a product
  
  export const getProduct = async productId => {
    try {
          const response = await fetch(`${API}/product/${productId}`, {
              method: "GET"
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };

  export const getOrders = async (userId,token) => {
    try {
          const response = await fetch(`${API}order/all/${userId}`, {
              method: "GET",
              headers:{
                Authorization:`Bearer ${token}`
              }
              
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };
  
  //update a product
  
  export const updateProduct = async (productId, userId, token, product) => {
    try {
        console.log(product);
          const response = await fetch(`${API}/product/${productId}/${userId}`, {
              method: "PUT",
              headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${token}`
              },
             
              body: product
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };
  
  export const createOrder = async (userId, token, product) => {
    try {
          const response = await fetch(`${API}order/create/${userId}`, {
              method: "POST",
              headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${token}`,
                  "Content-type":"application/json"
              },
              body: JSON.stringify(product)
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };

  export const deleteUserId = async (duserId, userId, token) => {
    try {
          const response = await fetch(`${API}/user/deleteUser/${userId}`, {
              method: "DELETE",
              headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${token}`,
                  "Content-type":"application/json"
              },
              body:JSON.stringify(duserId)
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };

export const getUsers = async (userId,token) => {
    try {
          const response = await fetch(`${API}users/all/${userId}`, {
              method: "GET",
              headers:{
                Authorization:`Bearer ${token}`
              }
              
          });
          return await response.json();
      } catch (err) {
          return console.log(err);
      }
  };