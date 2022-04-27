import React, { Component } from "react";
import { NavLink } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook }  from "@fortawesome/free-brands-svg-icons";
import { faTwitter }  from "@fortawesome/free-brands-svg-icons";
import { faInstagram }  from "@fortawesome/free-brands-svg-icons";





export default class Footer extends Component {
    constructor() {
        super();
}
   render() {
       return (
           <div className="footer">
               <div className="links">
                <NavLink exact to="/home" activeClassName="nav-link-active">
                    HOME
                </NavLink>
                
                <NavLink exact to="/shop" activeClassName="nav-link-active">
                    SHOP
                </NavLink>
                </div>

                <div className="contact">
                    CONTACT US
                </div>

                <div className="contact-info">
                    support@raygundesign.com
                </div>

                <div className="contact-info">
                    (555)-555-555
                </div>
            
                <div className="social-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                </div>
            
                
            
            </div>
        

        
    );
    }
}