import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { setToggleCart } from '../../redux/cart/cart-actions';
import { cartItemSelector } from '../../redux/cart/cart-selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown =({cartItems,history,dispatch})=> {
    const goToCheckout = ()=>{
        dispatch(setToggleCart());
        history.push('checkout');

    }
        return (
            <div className = "cart-dropdown">
                <div className='cart-items'>
                    {cartItems.length?
                    cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>):
                    (<span className='empty-message'>Your cart is empty</span>)}
                    </div>
                <CustomButton onClick={goToCheckout}>GO TO CHECKOUT</CustomButton>
            </div>
        );
}
// const mapStateToProps=({cart:{items}})=>({
//      cartItems: items
// });
/**
 * with selector and reselect
 */
 const mapStateToProps=createStructuredSelector({
    cartItems: cartItemSelector
});

export default withRouter(connect(mapStateToProps)(CartDropdown));