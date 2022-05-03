import React, { Component } from "react";
import '../../style/shop.scss';


import Footer from '../footer';

// PRODUCT PHOTOS //
import crewneck from '../../images/adidas_crewneck.jpg';
import radtee from '../../images/rad_tee.jpg';
import dickies from '../../images/dickies.jpg';
import green_crop from '../../images/green_crop.jpg';
import tie_dye from '../../images/tie_dye.jpg';
import ripped_jeans from '../../images/ripped_jeans.jpg';
import american_thunder from "../../images/american_thunder.jpg";
import blazer from "../../images/blazer.jpg";
import dickies_joggers from "../../images/dickies_joggers.jpg";
import hand_hoodie from "../../images/hand_hoodie.jpg";
import sublime_tiedye from "../../images/sublime_tiedye.jpg";
import vervet_jeans from "../../images/vervet_jeans.jpg";

export default class Shop extends Component {
  constructor() {
      super();
}
 render() {
     return (
      <div className="shop">
        <div className="shop-products">

            <div className="shop-product">
                <img src={radtee} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={blazer} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={crewneck} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={american_thunder} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={vervet_jeans} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={sublime_tiedye} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={dickies} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={green_crop} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="sub-product">
                <img src={hand_hoodie} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={ripped_jeans} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={tie_dye} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>

            <div className="shop-product">
                <img src={dickies_joggers} alt="pic" />
                <button type="button" className="btn">ADD TO CART</button>
            </div>
        </div>

      
      <Footer/>


  </div>
      

      
  );
  }
}