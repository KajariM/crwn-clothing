import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  cartItempriceSelector,
  cartItemSelector,
} from "../../redux/cart/cart-selectors";
import CheckoutItem from "../checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: cartItemSelector,
  total: cartItempriceSelector,
});
export default connect(mapStateToProps)(CheckoutPage);
