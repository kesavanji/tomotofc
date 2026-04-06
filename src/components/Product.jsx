import "./Product.css";
import add from "/images/add_icon.png";
import deletee from "/images/delete.png";

export const Product = ({ product, cart, setCart}) => {

    const addCart = ()=>{
 setCart([...cart,product])
    }
    const removeCart = ()=>{
      setCart(cart.filter((c)=>c.id !== product.id))
    }
  return (
    <div className="product">

      <img src={product.pic} className="product_pic" />

      <div className="product-details">

      <h3>Name: {product.name}</h3>

      <h4>Price: ₹{product.price}</h4>
      {
      cart.includes(product) ? <img src={deletee} onClick={removeCart} className="productadd"/> 
      :<img src={add} onClick={addCart} className="productadd" /> 
      
      }

      
      

      </div>
    </div>
  );
};
