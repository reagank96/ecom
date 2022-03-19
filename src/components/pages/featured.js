import React, { Component } from "react";
import '../../style/featured.scss';

//images
import crewneck from '../../images/adidas_crewneck.jpg';
import featured from '../../images/lifestyle.jpg';
import radtee from '../../images/rad_tee.jpg';
import dickies from '../../images/dickies.jpg';
import green_crop from '../../images/green_crop.jpg';
import tie_dye from '../../images/tie_dye.jpg';
import ripped_jeans from '../../images/ripped_jeans.jpg';


export default class Featured extends Component {
    constructor() {
        super();
}
   render() {
       return (
           <div className="featured">

                <div className="main-image">
                    <img src={featured} alt="pic" />
                </div>

                <div className="title">
                    <h1>FEATURED PRODUCTS</h1>
                </div>

                <div className="products">
                    <div className="sub-product">
                        <img src={crewneck} alt="pic" />
                        <button type="button" className="btn">SHOP NOW</button>
                    </div>

                    <div className="sub-product">
                        <img src={radtee} alt="pic" />
                        <button type="button" className="btn">SHOP NOW</button>
                    </div>

                    <div className="sub-product">
                        <img src={dickies} alt="pic" />
                        <button type="button" className="btn">SHOP NOW</button>
                    </div>

                    <div className="sub-product">
                        <img src={green_crop} alt="pic" />
                        <button type="button" className="btn">SHOP NOW</button>
                    </div>

                    <div className="sub-product">
                        <img src={ripped_jeans} alt="pic" />
                        <button type="button" className="btn">SHOP NOW</button>
                    </div>

                    <div className="sub-product">
                        <img src={tie_dye} alt="pic" />
                        <button type="button" className="btn">SHOP NOW</button>
                    </div>

                    
                </div>

                
            </div>
        

        
    );
    }
}