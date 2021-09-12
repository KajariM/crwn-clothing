export const uniqueItems = (cartItems, cartItemToAdd) => {
  const existingItems = cartItems.find((item) => item.id === cartItemToAdd.id);
  if (existingItems) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity+1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const filterRemoveItem = (cartItems, itemToRemove) => {
  return cartItems.filter(item=>item.id!==itemToRemove.id)
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  const existingCartItem = cartItems.find(item=>item.id===itemToDecrease.id);
  if(existingCartItem.quantity===1){
    return cartItems.filter(item=>item.id!==existingCartItem.id)
  }
  return cartItems.map(cartItem=>
    cartItem===existingCartItem? {...cartItem,quantity:cartItem.quantity-1}:cartItem
  )
}
