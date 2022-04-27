import React from 'react';
import NavigationComponent from '../navigation/navigation-container';
import Featured from './featured';
import Footer from '../footer';




export default function() {
    return(
        <div>
           {/* <NavigationComponent/> */}
           <Featured/>
           <Footer/>
        </div>

        
    );
}
