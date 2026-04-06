import { useEffect, useState } from "react"
import "./Cart.css"

export const Cart = ({cart, setCart}) => {
  const[total,setTotal] =useState(0);

  useEffect(()=>{

    setTotal(cart.reduce((acc , curr)=> acc+ Number(curr.price),0))
  },[cart])


  return (
    <div className="card">
      <h1>Food Bill</h1>

        {cart.map((product) => (
        <div className="bill-details" key={product.id}>
          <img src={product.pic} alt="image" />
          <div>
            <h2>Food Name: {product.name}</h2>
            <h3>Food Price ₹{product.pic}</h3>
          </div>
        </div>
      ))}
        
        

      
      <p>Total Price: ₹{total}</p>
    </div>
  )
}
