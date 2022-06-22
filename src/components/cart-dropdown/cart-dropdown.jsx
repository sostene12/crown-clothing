import React from 'react';
import "./cart-dropdown.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect"

// to be used on withRouter
import { useLocation, useNavigate, useParams } from "react-router-dom";

import CustomButton from "../custom-button/custom-button"
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartDropdown = ({cartItems,dispatch}) => {

    const navigate = useNavigate();
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) : 
                <span className='empty-message'>Your Cart is empty</span>}
            </div>
            {/* error , navigation not working */}
                <CustomButton onClick={() => {
                    navigate("/checkout");
                    dispatch(toggleCartHidden());
                    } }>CHECKOUT</CustomButton>
        </div>
     );
}

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
})

// creating withRouter ourselves because it is no longer supported in React-Router V6
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    }
  
    return ComponentWithRouterProp;
  }
  
export default withRouter(connect(mapStateToProps)(CartDropdown));


