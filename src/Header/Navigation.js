import React from 'react';
import {Redirect} from 'react-router-dom';
class Navigation extends React.Component {
   
    showImage = ()=> { 
        return <Redirect  to="Content/content.js/" />
    }

      render() {
        return (
            
            <div>
                <nav>Bombay to Mangalore flight ticket | applied coupon from amazon | Price discount of Rs.1500 <button type="button" onClick={this.showImage}>Click Here</button> </nav> 
            </div>

           
        );
    }
    

}

export default Navigation;