import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart-actions';

import { connect } from 'react-redux';

const CollectionItem = ({item,addItem}) => {
    const {name,imageUrl,price} = item;
    return ( 
        <div className='collection-item'>
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
                <div className="collection-footer">
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
                <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
        </div>
     );
}

const mapDispatchToProps = dispatch => ({
    addItem:item => dispatch(addItem(item))
});
 
export default connect(null,mapDispatchToProps)(CollectionItem);