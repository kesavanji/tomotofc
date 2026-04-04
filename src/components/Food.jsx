import "./Food.css";
import product from "./food.json";
import { Product } from "./Product";
export const Food = ({cart, setCart}) => {
  return (
    <div className="food-container">
       <h1>Best Food <br /> When Hungry</h1>
    <div className="food">
      {
        product.map((products)=>(<Product key={products.id} product={products} cart={cart} setCart={setCart}/>))
      }
    </div>
    </div>
  )
}
