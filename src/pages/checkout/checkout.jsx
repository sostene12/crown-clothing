import React from 'react';
import "./checkout.scss";

import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart-selectors';
import CheckoutItem from "../../components/checkout-item/checkout-item";

import StripeCheckoutButton from '../../components/stripe-button/stripe-button';


const CheckoutPage = ({cartItems,total}) =>{
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block"> 
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}  />
                )}
            <div className="total">
                <span>TOTAL: ${total}</span>
             
            </div>
            <div className="test-warning">
                *Please use The following credite card for Payments*
                <br />
                4242 4242 4242 4242 - EXP: 01/20 - CVV:123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector  ({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);