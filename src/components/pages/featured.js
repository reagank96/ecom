import React, { Component } from "react";
import '../../style/featured.scss';

//images
import crewneck from '../../images/adidas_crewneck.jpg';
import featured from '../../images/lifestyle.jpg';
import radtee from '../../images/rad_tee.jpg';

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

                <h1>Featured Products</h1>

                <div className="products">
                    <div className="sub-product">
                        <img src={crewneck} alt="pic" />
                    </div>

                    <div className="sub-product">
                        <img src={radtee} alt="pic" />
                    </div>
                </div>

                
            </div>
        

        
    );
    }
}