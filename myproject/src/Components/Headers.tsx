import { Link } from "react-router-dom"
import "../styles/header.css"
export default function Header()
{
    return(
          <div className="header">
          <div className="nav">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="">Contact</Link></li>
            </ul>
          </div>
          </div>


    )
  
}