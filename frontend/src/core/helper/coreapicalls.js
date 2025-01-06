import { API } from "../../backend";

export const getProducts = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getOrders=async (userId,token,category)=>{
  try {
      const response = await fetch(`${API}/order/${userId}`, {
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