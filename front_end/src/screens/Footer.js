import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="main-footer">
      <div className="containerfooter">
        <div className="rowbottom">
          
            <ui className="list-none">
                <li><Link to="/">Shop</Link> </li> 
                 <li><Link to="/">Contact Us</Link> </li> 
                 <li> <Link to="/AboutUs">About us</Link></li>
                 <li><Link to="/PrivacyPolicy">Terms of service</Link></li>
            </ui>
          
        </div>
        <div className="rowfooter">
          <p className="col-sm">
           All rights reserved &copy; Omart {new Date().getFullYear()}  
         </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;