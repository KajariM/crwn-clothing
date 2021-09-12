import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {setToggleCart} from '../../redux/cart/cart-actions';
import { cartItemcountSelector } from '../../redux/cart/cart-selectors';

const CartIcon=({setToggleCart,itemCount})=>  (
            <div className = "cart-icon" onClick={setToggleCart}>
                <Logo className="shopping-icon"/>
                <span className="item-count">{itemCount}</span>
            </div>
        );
    

const mapDispatchToProps = dispatch=>({
    setToggleCart : () =>dispatch(setToggleCart())
})
const mapStateToProps = (state) =>({
    itemCount : cartItemcountSelector(state)
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);