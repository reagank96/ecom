import React, { Component } from "react";


export default class Featured extends Component {
    constructor() {
        super();
}
   render() {
       return (
           <div className="featured">
                <h1>homepage</h1>

                <div className="main-image">
                    <img>featured product</img>
                </div>

                <div className="sub-product">
                    <img>1</img>
                </div>

                <div className="sub-product">
                    <img>2</img>
                </div>

                <div className="sub-product">
                    <img>3</img>
                </div>

                <div className="sub-product">
                    <img>4</img>
                </div>

                <div className="sub-product">
                    <img>5</img>
                </div>

                <div className="sub-product">
                    <img>6</img>
                </div>
            </div>
        

        
    );
    }
}