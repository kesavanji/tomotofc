import "./Home.css"
import { Link } from "react-router-dom"
import food1 from "/images/food_1.png"
import food2 from "/images/food_10.png"
import food3 from "/images/food_2.png"
import arrow_btn from "/images/arrow_btn.png"
export const Home = () => {
  return (
    <div className="home">
        <h1>Order Your <br />Favourite Food</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> A cumque nesciunt vel dolore eligendi, illum quos, est laudantium <br /> similique nisi magnam itaque quas incidunt distinctio saepe nemo harum rem commodi.</p>
        <div className="home_img">
            <div className="img">
                <img src={food1}/>
            </div>
             <div className="img">
                <img src={food2}/>
            </div>
             <div className="img">
                <img src={food3}/>
            </div>
        </div>
        <div className="home-b">
            <Link to={'/food'}>Order Now</Link>
            <img src={arrow_btn} alt="image" />
        </div>
    </div>
  )
}
