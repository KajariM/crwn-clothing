import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import "./header.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { cartHiddenSelector } from "../../redux/cart/cart-selectors";
import { currentUserSelector } from "../../redux/user/user-selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden ? <CartDropdown /> : null}
  </div>
);
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden,
// });
// const mapStateToProps = (state) => ({
//   currentUser: currentUserSelector(state),
//   hidden: cartHiddenSelector(state)
// });
const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartHiddenSelector,
});
export default connect(mapStateToProps)(Header);
