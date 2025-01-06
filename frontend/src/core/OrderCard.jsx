import React from 'react'

const ProductList=({products})=>{
    return (
        <ul>
          {products.map((product, index) => {
        console.log(product)
            return (
              <li key={index}>
                 {product.name}
              </li>
            );
        })} 
        </ul>
    )
}


const OrderCard = ({
    order,
    products,
    index
}) => {
  return (
    <div className="card text-dark border border-info ">
    <div className="card-header lead">{index+1}  Order Details</div>
    <div className="card-body">
    
      <p className="lead  font-weight-normal text-wrap">
      
      Order placed on {order.createdAt.slice(0,10)}
      </p>
      <p className="lead  font-weight-normal text-wrap text-left">
      
      Products purchased:
      </p>
      
      <ProductList products={products}/>
      
      <p className="lead  font-weight-normal text-wrap text-left">
      
      Order amount:{order.amount}
      </p>      
    </div>
  </div>
  )
}

export default OrderCard
