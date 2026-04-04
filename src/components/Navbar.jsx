import { NavLink } from "react-router-dom"
import "./Navbar.css"
import profile from "/images/profile_image.png"
export const Navbar = () => {
  return (
    <div className="nav">
        <h2 className="logo">TomotoFC </h2>
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/food"}>Food</NavLink>
            </li>
            <li>
                <NavLink to={"/cart"}>Cart</NavLink>
            </li>
            <li>
                Contact
            </li>
            <li>
                <img src={profile} alt="profile" />
            </li>
        </ul>
        
    </div>
  )
}
