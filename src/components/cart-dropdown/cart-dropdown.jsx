import React from 'react';
import "./cart-dropdown.scss";

import CustomButton from "../custom-button/custom-button"

const CartDropdown = () => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>CHECKOUT</CustomButton>
            </div>
        </div>
     );
}
 
export default CartDropdown;