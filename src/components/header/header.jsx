import React from 'react';
import { createStructuredSelector } from "reselect";
import { Link } from 'react-router-dom';
import './header.scss'
import {ReactComponent as  Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
// connect let us change the elements of redux

import CartIcon from "../cart-icon/cart-icon"
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';


const Header = ({currentUser,hidden}) => {
    return ( 
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo  className='logo'/>
            </Link>
            <div className="options">
                <Link to="/shop" className='option'>
                    SHOP
                </Link>
                <Link to="/contact" className='option'>CONTACT</Link>
                { currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
                }
                <CartIcon />
            </div>
                { hidden ? null :
                    <CartDropdown/>
                    }
        </div>
     );
}
 
const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);