import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItemFromCart, addItemsCart } from '../../redux/cart/cart-actions';
import './checkout-item.styles.scss';

const CheckoutItem =({cartItem,dispatch})=>{
    const {id,name,imageUrl,price,quantity} = cartItem;
    return (
    <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt=''/>
                </div>
                <span className='name'>{name}</span>
                <span className='quantity'>
                    <div className='arrow' onClick={()=>dispatch(removeItemFromCart(cartItem))}>&#x3C;</div>
                    <div className='value'>{quantity}</div>
                    <div className='arrow'onClick={()=>dispatch(addItemsCart(cartItem))}>&#x3E;</div>
                    </span>
                <span className='price'>{price}</span>
                <div className='remove-button' onClick={()=>dispatch(clearItemFromCart(cartItem))}>&#x2613;</div>
            </div>)
}
export default connect()(CheckoutItem);