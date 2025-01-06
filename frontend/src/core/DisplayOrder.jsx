import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../auth/helper';
import { getOrders } from './helper/coreapicalls';
import Card from './Card';
import OrderCard from './OrderCard';


const DisplayOrder = () => {

    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(false);

    const{user,token}=isAuthenticated()
  
    const loadAllOrders = () => {
      getOrders(user._id,token,{"userId":user._id}).then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setOrders(data);
        }
      });
    };
  
    useEffect(() => {
      loadAllOrders();
    }, []);

  return (
    <div className='row'>
      {orders.map((product, index) => {
        const a=product.amount
        const products=product.products
        
            return (
              <div key={index} className="col-6 mb-4">
                <OrderCard order={product} products={products} index={index} />
              </div>
            );
          })}
    </div>
  )
}

export default DisplayOrder;
