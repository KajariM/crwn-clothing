import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItemsCart } from "../../redux/cart/cart-actions";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItemsCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name"> {name} </span>
        <span className="price"> {price} </span>
      </div>
      <CustomButton inverted onClick={() => addItemsCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItemsCart: (items) => dispatch(addItemsCart(items)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
