import { API } from "../../backend";

export const createOrder = async (userId, token, orderData) => {
  try {
        const reponse = await fetch(`${API}/order/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ order: orderData })
        });
        return await reponse.json();
    } catch (err) {
        return console.log(err);
    }
};



