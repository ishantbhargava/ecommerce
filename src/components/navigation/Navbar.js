import logo from "../../images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";


export  default function Navbar(){
    return(
        <div>
          
        
        <nav className= "nav-flex-container">
        
     
            <img className="nav-logo"  src={logo} alt="logo" />
            <div>
          <Link to="/" > <p className="nav-header">SUPERSHOP.COM</p></Link> 
          </div>
          <div className="nav-links">       
          <Link to="/products"> <button className="nav-links">ALL PRODUCT</button> </Link>
         
    
          </div>
        </nav>
        </div>
    )
}